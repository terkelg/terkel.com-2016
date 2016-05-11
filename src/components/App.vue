<template>
  <main id="app">
    <border></border>
    <primary></primary> <!-- Det her er vel egentlig router views? -->
    <secondary></secondary>
  </main>
</template>

<script>
import Border from 'components/Border';
import Secondary from 'components/Secondary';
import Primary from 'components/Primary';

export default {
  ready () {
    console.log('Hej');
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

  #app {}
  </style>
