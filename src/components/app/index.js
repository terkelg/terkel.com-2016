import store from 'vuex/store';

import {
  windowResize,
  windowVisible,
  deviceDetect
} from 'vuex/actions';
import { getDevice, getTheme } from 'vuex/getters';

import debounce from 'lodash.debounce';

import Border from '../Border';
import World from '../World';
import Secondary from '../secondary/Main';

import 'stylesheets/main.scss';
import './styles.scss';

export default Vue.extend({
  template: require('./template.html'),

  vuex: {
    actions: {
      resize: windowResize,
      visible: windowVisible,
      device: deviceDetect
    },
    getters: {
      getDevice: getDevice,
      theme: getTheme
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
    }
  },

  components: {
    Border,
    Secondary,
    World
  },

  store // make this and all child components aware of the new store
});
