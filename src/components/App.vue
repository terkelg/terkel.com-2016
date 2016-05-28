<template>
  <main v:el="wrapper" v-bind:class="theme">
    <div id="preloader" v-if="loading" transition="fade" transition-mode="out"></div>
    <border></border>
    <world></world>
    <secondary></secondary>
    <primary></primary>
  </main>
</template>

<script>
import store from 'vuex/store';

import {
  windowResize,
  windowVisible,
  deviceDetect,
  secondaryOpen,
  secondaryClose
} from 'vuex/actions';

import {
  getDevice,
  getRoute,
  getTheme,
  getSecondary,
  getVisibility
} from 'vuex/getters';

import debounce from 'lodash.debounce';
import delay from 'lodash.delay';

import Border from './Border';
import World from './World';
import Secondary from './secondary/Main';
import Primary from './Primary';

import 'stylesheets/main.scss';

export default {

  vuex: {
    actions: {
      resizeState: windowResize,
      visibleState: windowVisible,
      deviceState: deviceDetect,
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen
    },
    getters: {
      getDevice: getDevice,
      route: getRoute,
      theme: getTheme,
      secondary: getSecondary,
      visibility: getVisibility
    }
  },

  data: () => {
    return {
      loading: true,
      start: false
    };
  },

  watch: {
    'route.path': 'routeChange'
  },

  events: {
    'secondary-opened': () => {
      console.log('Secondary Opnened!!');
    }
  },

  created () {
    this.bind();
  },

  ready () {
    this.init();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    bind () {
      this.resizeEnd = debounce(this.resizeEnd, 250);
      this.dispatchWindowSize = debounce(this.dispatchWindowSize, 50);
    },

    init () {
      // Set initial state
      this.resizeState();
      this.visibleState();
      this.deviceState();

      // Set Event listeners
      this.addEventListeners();
      this.addDeviceClass();
      this.addBrowserClass();

      // Set Preloader
      delay(this.loadComplete, 750);
    },

    addEventListeners () {
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('visibilitychange', this.dispatchVisibilityChange);
    },

    removeEventListeners () {
      window.removeEventListener('resize', this.onResize, false);
      window.removeEventListener('visibilitychange', this.dispatchVisibilityChange);
    },

    addBrowserClass () {
      this.$el.classList.add(this.getDevice.browser + '-browser');
    },

    addDeviceClass () {
      this.$el.classList.add(this.getDevice.type + '-device');
    },

    dispatchWindowSize (event) {
      this.$broadcast('window-resize', event);
      this.resizeState();
    },

    dispatchVisibilityChange (event) {
      this.$broadcast('window-visibility', event);
      this.visibleState();

      if (this.loading === false) {}
    },

    routeChange () {
      this.$broadcast('route-change', this.$route);
      if (this.$route.secondary) {
        this.secondaryOpen();
      } else {
        this.secondaryClose();
      }
    },

    onResize (event) {
      this.$el.classList.add('notransition');
      this.dispatchWindowSize();
      this.resizeEnd(event);
    },

    resizeEnd () {
      this.$el.classList.remove('notransition');
    },

    loadComplete () {
      this.loading = false;
    }
  },

  components: {
    Border,
    Secondary,
    World,
    Primary
  },

  store // make this and all child components aware of the new store
};
</script>
