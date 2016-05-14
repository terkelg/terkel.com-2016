import Vue from 'vue';
import './styles.scss';

import Logo from '../logo';
import Topnav from './topnav';

export default Vue.extend({

  template: require('./template.html'),

  data: () => {
    return {
      year: null,
      section: '01',
      animateTopNav: false
    };
  },

  created () {},

  ready () {
    this.secondary = this.$els.secondary;
    this.menuTop = this.$els.menutop;
    this.open = false;
    this.year = this.getYear();

    // TODO: Tween every top button in a nice way
    // Display block

    this.addEventListeners();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    clickNavigation () {
      // TODO: Optimize Performance on Safari.
      // Try to use TweenMax to animate the width only!
      this.secondary.classList.toggle('secondary--open');
      document.body.classList.toggle('dark');
    },

    addEventListeners () {
      this.secondary.addEventListener('transitionend', this.transitionCallback, false);
    },

    removeEventListeners () {
      this.secondary.removeEventListener('transitionend', this.transitionCallback, false);
    },

    transitionCallback (e) {
      if (e.propertyName === 'width') {
        if (this.open) {
          this.didClose();
        } else {
          this.didOpen();
        }
        this.open = !this.open;
      }
    },

    didOpen () {
      console.log('DidOpen');
      // TODO: Emmit event
    },

    didClose () {
      console.log('DidClose!');
      // TODO: Emmit event
    },

    getYear () {
      var date = new Date();
      return date.getFullYear();
    }
  },

  transitions: {},

  components: {
    Logo,
    Topnav
  }
});
