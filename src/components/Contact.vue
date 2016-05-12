<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Contact me, please!
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Contact'
    };
  }
};
</script>

<style scoped>
</style>
