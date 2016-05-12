<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>I'm TERKEL! Need more?</p>
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
      msg: 'About'
    };
  }
};
</script>

<style scoped>
</style>
