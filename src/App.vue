<template>
  <main id="app">

    <border></border>

    <div class="wrapper"> <!-- call this main?? -->
      <div class="primary"> <!-- should be own component -->
      <!-- world canvas here -->
      <!-- <router-view></router-view> -->
      </div>
      <secondary></secondary>
    </div>

  </main>
</template>

<script>
import Secondary from './components/Secondary';
import Border from './components/Border';
// import World from './components/World';

export default {
  components: {
    Border,
    Secondary
  }
};
</script>

<style lang="scss">
@import './variables';

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}

.wrapper {
  padding: $border-size;
  box-sizing: border-box;
  position: relative;
  // to get this to work,
  // I need a new way to place primary and secondary
}
.primary {
  margin-left: 70px;
  position: relative;
  height: 100vh;
  background-color: $white;
}
</style>
