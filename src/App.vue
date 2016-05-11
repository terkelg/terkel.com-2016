<template>
  <main id="app">
    <border></border>
    <primary></primary>
    <secondary></secondary>
  </main>
</template>

<script>
import Border from './components/Border';
import Secondary from './components/Secondary';
import Primary from './components/Primary';

export default {
  components: {
    Border,
    Secondary,
    Primary
  }
};
</script>

<style lang="scss">
  @import './variables';

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {}
  </style>
