<template>
  <main v:el="wrapper" v-bind:class="theme">
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
  getSecondary
} from 'vuex/getters';

import debounce from 'lodash.debounce';

import Border from './Border';
import World from './World';
import Secondary from './secondary/Main';
import Primary from './Primary';

import 'stylesheets/main.scss';

export default {

  vuex: {
    actions: {
      resize: windowResize,
      visible: windowVisible,
      device: deviceDetect,
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen
    },
    getters: {
      getDevice: getDevice,
      route: getRoute,
      theme: getTheme,
      secondary: getSecondary
    }
  },

  watch: {
    'route.path': 'routeChange'
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
      this.onResize = debounce(this.dispatchWindowSize, 200);
    },

    init () {
      this.resize();
      this.visible();
      this.device();
      this.addEventListeners();
      this.addDeviceClass();
      this.addBrowserClass();
    },

    addEventListeners () {
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('visibilitychange', this.dispatchVisibilityChange);
    },

    removeEventListeners () {
      window.removeEventListener('resize', this.onResize, false);
      window.removeEventListener('visibilitychange', this.broadcastVisibilityChange);
    },

    addBrowserClass () {
      this.$el.classList.add(this.getDevice.browser + '-browser');
    },

    addDeviceClass () {
      this.$el.classList.add(this.getDevice.type + '-device');
    },

    dispatchWindowSize () {
      this.resize();
    },

    dispatchVisibilityChange () {
      this.visible();
    },

    routeChange (e) {
      if (this.$route.secondary) {
        this.secondaryOpen();
        console.log('Open', e, this.$route.name);
      } else {
        this.secondaryClose();
      }
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
