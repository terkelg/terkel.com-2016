<template>
  <main v:el="wrapper">
    <border></border>
    <!-- <world></world> -->
    <!-- <router-view></router-view> -->
    <secondary></secondary>

    <!-- <div class="background">
      <div class="background__inner">
        Fixed bg
      </div>
    </div> -->

  </main>
</template>

<style lang="scss">
  @import '../variables';

  *,
  *:before,
  *:after { box-sizing: border-box;}

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: blue;
    overflow: hidden;
    font-family: 'canada-type-gibson','Helvetica Neue', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .background {
    position: fixed;
    z-index: -100;
    background-color: green;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: $border-size;
    box-sizing: border-box;
    .background__inner {
      background-color: pink;
      width: 100%;
      height: 100%;
      padding-left: $nav-width;
      box-sizing: border-box;
    }
  }

</style>

<script>
import store from '../vuex/store';
import * as actions from '../vuex/actions';

import Border from './Border';
import World from './World';
import Secondary from './secondary';

export default {
  components: {
    Border,
    Secondary,
    World
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
