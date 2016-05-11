<template>
  <main v:el="wrapper">
    <border></border>
    <!--<primary></primary> <!-- Det her er vel egentlig router views? -->
    APP:
    <router-view></router-view>
    <!-- <secondary></secondary> -->
  </main>
</template>

<script>
import store from '../vuex/store';
import Border from 'components/Border';
import Secondary from 'components/Secondary';

export default {
  data () {
    return {};
  },

  created () {

  },

  ready () {
  },

  beforeDestroy () {
  },

  methods: {

  },

  components: {
    Border,
    Secondary
  },

  store: store
};

</script>

<style lang="scss">
  @import '../variables';

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  </style>
