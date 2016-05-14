import Vue from 'vue';
import './styles.scss';

import Logo from '../logo';

export default Vue.extend({

  template: require('./template.html'),

  data: () => {
    return {
      year: null,
      section: '01'
    };
  },

  created () {},

  ready () {
    this.secondary = this.$els.secondary;
    this.inner = this.$els.inner;
    this.nav = this.$els.nav;
    this.open = false;

    this.year = this.getYear();

    this.addEventListeners();
  },

  beforeDestroy () {
    this.removeEventListeners();
  },

  methods: {
    clickNavigation () {
      // TODO: Find a perfect solution here
      console.log('Click!');
      this.secondary.classList.toggle('open');
    },

    addEventListeners () {
      this.secondary.addEventListener('transitionend', this.transitionCallback, false);
    },

    removeEventListeners () {

    },

    transitionCallback (e) {
      if (e.propertyName === 'width') {
        if (this.open) {
          this.didOpen();
        } else {
          this.didClose();
        }
        this.open = !this.open;
      }
    },

    didOpen () {
      console.log('Transition has finished');
      // TODO: Emmit event
    },

    didClose () {
      console.log('Id closed!');
      // TODO: Emmit event
    },

    getYear () {
      var date = new Date();
      return date.getFullYear();
    }
  },

  transitions: {},

  components: {
    Logo
  }
});
