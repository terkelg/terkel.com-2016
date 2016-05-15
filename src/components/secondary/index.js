import Vue from 'vue';
import Emitter from 'core/emitter';

import {
  SECONDARY_TOGGLE
} from 'core/messages';

import './styles.scss';
import Topnav from './topnav';

export default Vue.extend({
  template: require('./template.html'),

  data: () => {
    return {
      year: null,
      section: '01',
      open: false
    };
  },

  created () {},

  ready () {
    this.year = this.getYear();

    this.addEventListeners();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    clickNavigation () {
      this.$els.secondary.classList.toggle('secondary--open');
      document.body.classList.toggle('dark');
    },

    addEventListeners () {
      this.$els.secondary.addEventListener('transitionend', this.transitionCallback, false);
    },

    removeEventListeners () {
      this.$els.secondary.removeEventListener('transitionend', this.transitionCallback, false);
    },

    transitionCallback (e) {
      // Avoid the function fire for every property
      if (e.propertyName === 'width') {
        if (this.open) {
          this.didClose();
          this.open = false;
        } else {
          this.didOpen();
          this.open = true;
        }
      }
    },

    didOpen () {
      Emitter.emit(SECONDARY_TOGGLE, { open: true });
    },

    didClose () {
      Emitter.emit(SECONDARY_TOGGLE, { open: false });
    },

    getYear () {
      var date = new Date();
      return date.getFullYear();
    }
  },

  transitions: {},

  components: {
    Topnav
  }
});
