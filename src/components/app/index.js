import Vue from 'vue';

import Emitter from 'core/emitter';
import States from 'core/states';
import debounce from 'lodash.debounce';

import {
  WINDOW_RESIZE,
  VISIBILITY_CHANGE
} from 'core/messages';

// Components
import Border from '../Border';
import World from '../World';
import Secondary from '../secondary';

export default Vue.extend({
  template: require('./template.html'),

  created () {
    this.bind();
  },

  ready () {
    this.addEventListeners();
    this.addDeviceClass();
    this.addBrowserClass();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    /*
     * Binding & Events
     */
    bind () {
      this.onResize = debounce(this.broadcastWindowSize, 200);
    },

    addEventListeners () {
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('visibilitychange', this.broadcastVisibilityChange);
    },

    removeEventListeners () {
      window.removeEventListener('resize', this.onResize, false);
      window.removeEventListener('visibilitychange', this.broadcastVisibilityChange);
    },

    addBrowserClass () {
      this.$el.classList.add(States.browserName + '-browser');
    },

    addDeviceClass () {
      this.$el.classList.add(States.deviceType + '-device');
    },

    /*
     * Resize
     */
    broadcastWindowSize () {
      Emitter.emit(WINDOW_RESIZE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    },

    /*
     * Visibility Change
     */
    broadcastVisibilityChange () {
      Emitter.emit(VISIBILITY_CHANGE, {
        status: document.visibilityState
      });
    }
  },

  components: {
    Border,
    Secondary,
    World
  }
});
