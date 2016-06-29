<template>
  <div class="world">
    <div class="world__inner" v-el:container></div>
  </div>
</template>

<script>
import {
  getSize,
  getVisibility,
  getSecondary
} from 'vuex/getters';
import World from 'world';

import throttle from 'lodash.throttle';

export default {
  vuex: {
    getters: {
      visible: getVisibility,
      size: getSize,
      secondary: getSecondary
    }
  },

  events: {
    'route-change': function () {
      this.toStage();
      return true;
    },
    'window-resize': function () {
      this.onResize();
      return true;
    }
  },

  data: () => {
    return {
      routes: [
        'home',
        'cases',
        'about',
        'contact'
      ],
      lastTouchX: 0,
      lastTouchY: 0
    };
  },

  created () {
    this.keyboardEvent = throttle(this.keyboardEvent, 850, { 'trailing': false });
    this.scrollEvent = throttle(this.scrollEvent, 1500, { 'trailing': false });
    this.touchMove = throttle(this.touchMove, 1000, { 'trailing': false });

    this.touchMove = this.touchMove.bind(this);
    this.touchStart = this.touchStart.bind(this);

    this.addEventListeners();
  },

  beforeDestroy: function () {
    this.removeEventListeners();
  },

  ready () {
    /* Make Stage a class?
     * - TODO: Better way to get elements on - Direct vue?
     */
    const pages = [
      this.$root.$children[3].$els.home,
      this.$root.$children[3].$els.cases,
      this.$root.$children[3].$els.about,
      this.$root.$children[3].$els.contact
    ];
    this.world = new World(this.$els.container, pages);

    TweenLite.ticker.addEventListener('tick', () => {
      this.world.render();
    });

    // this.world.startAnimate(this.$route.index || 0);
  },

  methods: {
    addEventListeners () {
      window.addEventListener('keyup', this.keyboardEvent, false);
      window.addEventListener('wheel', this.scrollEvent, true);
      document.addEventListener('touchmove', this.touchMove, false);
      document.addEventListener('touchstart', this.touchStart, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
    },

    removeEventListeners () {
      window.removeEventListener('keyup', this.keyboardEvent, false);
      window.removeEventListener('wheel', this.scrollEvent, true);
      document.removeEventListener('touchmove', this.touchMove, false);
      document.removeEventListener('touchstart', this.touchStart, false);
      document.removeEventListener('mousemove', this.onMouseMove, false);
    },

    onResize () {
      this.world.resize(this.$el.offsetWidth, this.$el.offsetHeight);
    },

    onMouseMove (event) {
      this.world.mouseMove(event.clientX, event.clientY);
    },

    /**
     * toStage
     * Move to specific stage in 3D World
     * @return {Void}
     */
    toStage () {
      this.world.moveToStage(this.$route.index);
    },

    /**
     * nextStage
     * Move to the next stage
     * @return {Void}
     */
    nextStage () {
      const index = this.$route.index;
      this.$router.go({ name: this.routes[index + 1] });
    },

    /**
     * previusStage
     * Move to previus stage
     * @return {Void}
     */
    previusStage () {
      const index = this.$route.index;
      this.$router.go({ name: this.routes[index - 1] });
    },

    /**
     * keyboardEvent
     * Use keyboard to navigate stages
     * @param {Event} event - Event Object
     * @return {Void}
     */
    keyboardEvent (event) {
      if (this.secondary.status !== 'open') {
        if (event.which === 38) {
          this.previusStage();
        }
        if (event.which === 40) {
          this.nextStage();
        }
      }
    },

    /**
     * scrollEvent
     * Allow scroll to navigate stages based on direction
     * @param {Event} event - Event Object
     * @return {Void}
     */
    scrollEvent (event) {
      console.log(event.deltaY);
      if (this.secondary.status !== 'open') {
        if (event.deltaY < 0) {
          this.previusStage();
        } else if (event.deltaY + 1 > -0) {
          this.nextStage();
        }
      }
    },

    /**
     * Allow Touch / Swipe to scroll
     * https://gregsramblings.com/2012/05/23/preventing-vertical-scrolling-bounce-using-javascript-on-ios-devices/
     */
    touchStart (event) {
      this.lastTouchX = event.touches[0].screenX;
      this.lastTouchY = event.touches[0].screenY;
    },

    touchMove (event) {
      if (this.secondary.status !== 'open') {
        // var xMovement = event.touches[0].screenX - this.lastTouchX;
        var yMovement = event.touches[0].screenY - this.lastTouchY;
        event.preventDefault();
        if (yMovement > 0) {
          this.previusStage();
        } else if (yMovement < 0) {
          this.nextStage();
        }
      }
    }

  }
};
</script>
