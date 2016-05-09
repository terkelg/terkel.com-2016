<template>
  <div id="app">
    <!-- <hello></hello> -->
    Hello - go to <a v-link="'bar'">Bar</a>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
</style>
