import Vue from 'vue';

import Emitter from '../../core/emitter';
import States from '../../core/states';

import Border from '../Border';
import World from '../World';
import Secondary from '../secondary';

export default Vue.extend({
  template: require('./template.html'),

  components: {
    Border,
    Secondary,
    World
  },

  ready () {
    this.addEventListeners();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    /*
     * Binding & Events
     */
    addEventListeners () {
      document.addEventListener('visibilitychange', this.onVisibilityChange);
    },

    removeEventListeners () {
      window.removeEventListener('visibilitychange', this.onVisibilityChange);
    },

    onVisibilityChange () {}
  }
});
