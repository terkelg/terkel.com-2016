<template>
  <div id="app">
    <!-- <hello></hello> -->
    <world></world>
    <router-view></router-view>
  </div>
</template>

<script>
import World from './components/World';
import Hello from './components/Hello';

export default {
  components: {
    World,
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
