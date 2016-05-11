<template>
  <main v:el="wrapper">
    <border></border>
    <!--<primary></primary> <!-- Det her er vel egentlig router views? -->
    APP:
    <router-view></router-view>
    <!-- <secondary></secondary> -->
  </main>
</template>

<style lang="scss">
  @import '../variables';

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<script>
import store from '../vuex/store';
import * as actions from '../vuex/actions';

import Border from './Border';
import Secondary from './Secondary';

export default {
  components: {
    Border,
    Secondary
  },

  store: store,
  vuex: {
    actions: {
      windowVisible: actions.windowVisible
    }
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

    onVisibilityChange () {
      this.windowVisible();
    }
  }
};
</script>
