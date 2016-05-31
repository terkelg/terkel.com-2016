<template>
  <aside class="secondary" v-bind:class="['secondary--' + size.layout, secondary.status]">
    <div class="secondary__inner">

      <component :is="size.layout">
        <div slot="navigation">
          <a class="btn btn--close" @click=closeButton>
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 26.3 26.3;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="26.3,2.8 23.5,0 13.2,10.3 2.8,0 0,2.8 10.3,13.2 0,23.5 2.8,26.3 13.2,16 23.5,26.3 26.3,23.5 16,13.2 "/>
            </svg>
          </a>

          <a class="btn btn--next" v-bind:class="next" @click=goNext v-show="this.$route.name === 'case'">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="18.7,0 15.9,2.8 23,10 0,10 0,14 23,14 15.9,21.1 18.7,24 30.7,12 "/>
            </svg>
          </a>

          <a class="btn btn--prev" v-bind:class="prev" @click=goPrevious v-show="this.$route.name === 'case'">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="30.7,14 30.7,10 7.7,10 14.8,2.8 12,0 0,12 12,24 14.8,21.1 7.7,14 "/>
            </svg>
          </a>
        </div>

        <div slot="menu">
          <ul>
            <li><a v-link="{ path: '/', exact: true }">Home</a></li>
            <li><a v-link="{ name: 'cases' }">Cases</a></li>
            <li><a v-link="{ name: 'about' }">About</a></li>
            <li><a v-link="{ name: 'contact' }">Contact</a></li>
          </li>
        </div>

        <div slot="section">0{{$route.index + 1}}</div>
      </component>

      <div class="content-wrapper" v-show="secondary.content" transition="fade" transition-mode="out-in">
        <div class="content-wrapper__inner">
          <router-view></router-view>
        </div>
        <loader v-if="secondary.loader" transition="fade" transition-mode="out-in"></loader>
      </div>
    </div>
  </aside>
</template>

<script>
import {
  secondaryOpen,
  secondaryClose,
  secondaryShowLoader,
  secondaryShowContent,
  currentCase
} from 'vuex/actions';

import {
  getSize,
  getSecondary,
  getCases
} from 'vuex/getters';

import desktop from './Desktop';
import mobile from './Mobile';
import loader from '../common/loader';

import delay from 'lodash.delay';

export default {
  vuex: {
    actions: {
      secondaryClose,
      secondaryOpen,
      secondaryShowLoader,
      secondaryShowContent,
      currentCase
    },
    getters: {
      size: getSize,
      secondary: getSecondary,
      cases: getCases
    }
  },

  data: () => {
    return {
      next: 'disabled',
      prev: 'disabled',
      isOpen: false,
      loaded: false
    };
  },

  events: {
    'route-change': 'routeChange',
    'content-loaded': 'contentDidLoad',
    'content-destroy': 'contentDidDestroy'
  },

  ready () {
    this.addEventListeners();
  },

  methods: {
    addEventListeners () {
      this.$el.addEventListener('transitionend', this.completionHandler.bind(this), false);
    },

    /**
     * completionHandler
     * Delegate transition event to methods,
     * based on secondary state
     * @return {Void}
     */
    completionHandler (event) {
      if (event.propertyName === 'transform') {
        if (this.secondary.status === 'open') {
          this.$broadcast('secondary-opened');
          this.secondaryDidOpen();
        } else {
          this.$broadcast('secondary-closed');
          this.secondaryDidClose();
        }
      }
    },

    /**
     * Close button actions
     * Fires imediatly – contrary secondaryDidClose
     * @return {Void}
     */
    closeButton () {
      let backTo;
      if (this.$route.name === 'case') {
        backTo = 'cases';
      } else if (this.$route.name === 'cv') {
        backTo = 'about';
      } else {
        backTo = 'home';
      }
      this.$router.go({name: backTo});
    },

    /**
     * Route Event Handler
     * Fire when route changes
     * @return {Boolean} true - Return true to let the event propagate
     */
    routeChange () {
      if (this.$route.name === 'case') {
        this.setButtonState();
      }
      return true; // Let the event propagate
    },

    /**
     * Content Loaded Event Handler
     * Fire when content loads
     * @return {Boolean} undefined - Return true to let the event propagate
     */
    contentDidLoad () {
      this.loaded = true;
      this.secondaryShowLoader(false);
      if (this.isOpen) {
        this.secondaryShowContent(true);
      }
      return true;
    },

    /**
     * Content Destroy Event Handler
     * Fire when content unloads
     * @return {Boolean} true - Return true to let the event propagate
     */
    contentDidDestroy () {
      this.loaded = false;
      this.stopVideo(this.$el);
      return true;
    },

    secondaryDidOpen () {
      this.isOpen = true;
      this.secondaryShowContent(true);
    },

    secondaryDidClose () {
      this.isOpen = false;
      this.secondaryShowContent(false);
      this.secondaryShowLoader(true);
    },

    goNext () {
      if (this.next !== 'disabled') {
        this.delayedLoader();
        const nextIndex = this.getIndex() + 1;
        this.$router.go(this.cases[nextIndex].id);
      }
    },

    goPrevious () {
      if (this.prev !== 'disabled') {
        this.delayedLoader();
        const prevIndex = this.getIndex() - 1;
        this.$router.go(this.cases[prevIndex].id);
      }
    },

    /**
     * setButtonState
     * Determines the state of the next / prev buttons
     * disable if at the end or start of case list-style
     * @return {Void}
     */
    setButtonState () {
      if (this.$route.name === 'case') {
        if (this.getIndex() - 1 < 0) {
          this.prev = 'disabled';
        } else {
          this.prev = '';
        }

        if (this.getIndex() + 1 >= this.cases.length) {
          this.next = 'disabled';
        } else {
          this.next = '';
        }
      }
    },

    /**
     * getIndex()
     * Get the current case index and update state
     * @reutrn {Integer} index - Case index
     */
    getIndex () {
      const index = this.cases.findIndex(x => x.id === this.$route.params.case);
      this.currentCase(index);
      return index;
    },

    /**
     * delayedLoader
     * Show delayed loader after a few miliseconds
     * @return {Void}
     */
    delayedLoader () {
      delay(() => {
        if (this.loaded) { return; }
        this.secondaryShowContent(false);
        this.secondaryShowLoader(true);
      }, 300);
    },

    /**
     * Stop an iframe, YouTube, Vimeo or HTML5 <video> from playing
     * @param {Element} element The element that contains the video
     */
    stopVideo (element) {
      var iframe = element.querySelector('iframe');
      var video = element.querySelector('video');
      if (iframe) {
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
      if (video) {
        video.pause();
      }
    }
  },

  components: {
    desktop,
    mobile,
    loader
  }
};
</script>
