<template>
  <p>Hola, this is the home route view: {{$route.path}}</p>
</template>

<style>
</style>

<script>
export default {
  ready () {
    console.log('Hello from home', this.$route);
  },
  methods: {}
};
</script>
