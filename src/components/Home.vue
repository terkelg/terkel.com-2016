<template>
  <p>Hola, this is the home route view: {{$route.path}}</p>
  <button @click='resize'>Trigger Resize</button>
</template>

<style>
</style>

<script>
import { windowResize } from '../vuex/actions';

export default {

  ready () {
    console.log('Hello from home', this.$route);
    this.resize;
  },

  methods: {},

  vuex: {
    actions: {
      resize: windowResize
    }
  }

};
</script>
