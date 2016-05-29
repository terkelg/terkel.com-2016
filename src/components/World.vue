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
      ]
    };
  },

  created () {
    this.keyboardEvent = throttle(this.keyboardEvent, 850, { 'trailing': false });
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
      window.addEventListener('keyup', this.keyboardEvent);
      document.addEventListener('mousemove', this.onMouseMove, false);
    },

    removeEventListeners () {
      window.removeEventListener('keyup', this.keyboardEvent);
      document.removeEventListener('mousemove', this.onMouseMove, false);
    },

    onResize () {
      this.world.resize(this.$el.offsetWidth, this.$el.offsetHeight);
    },

    onMouseMove (event) {
      this.world.mouseMove(event.clientX, event.clientY);
    },

    toStage () {
      this.world.moveToStage(this.$route.index);
    },

    keyboardEvent (event) {
      if (this.secondary.status !== 'open') {
        const index = this.$route.index;
        if (event.which === 38) {
          this.$router.go({ name: this.routes[index - 1] });
        }
        if (event.which === 40) {
          this.$router.go({ name: this.routes[index + 1] });
        }
      }
    }
  }
};
</script>
