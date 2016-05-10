<template>
  <div id="app">
    <div class="main">
      <!-- world canvas here -->
      <!-- <router-view></router-view> -->
    </div>
    <secondary></secondary>
  </div>
</template>

<script>
import World from './components/World';
import Secondary from './components/Secondary';

export default {
  components: {
    World,
    Secondary
  }
};
</script>

<style>
/*
 * This is the global styles.
 * I guess it's best practice to move them into their own
 * file.
 */

/*
 * Colors
 */
 $white: #FFFFFF;
 $dark: #272727;
 $blue: #3545E5;
 $babyBlue: #CFDDF9;
 $yellow: #FFE88E;

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}


.main {
  margin-left: 70px;
  position: relative;
  height: 100vh;
  background-color: green;
}
</style>
