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
import Border from 'components/Border';
import Secondary from 'components/Secondary';
import Primary from 'components/Primary';

export default {
  data () {
    return {};
  },

  created () {

  },

  ready () {
    console.log('Hej');
  },

  beforeDestroy () {
    console.log('Bye ...');
  },

  methods: {

  },

  components: {
    Border,
    Secondary,
    Primary
  }
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
