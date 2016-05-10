<template>
  <aside class="secondary">
    <nav class="menu" v-on:click="expandMenu">
      Link
    </nav>
    <section class="content">
      Content should fade in
    </section>
  </aside>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Hello World!'
    };
  },

  methods: {
    expandMenu: function (event) {
      this.$el.classList.toggle('open');
      // Send event to border to change Color
      // send event to stop convas for a while
      // Emit all these actions
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../variables';

  .secondary {
    background-color: $white;
    width: $nav-width;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: all $secondary-sec ease-in-out;

    &.open {
      width: 100%;
      background-color: $dark;
    }
  }

  nav {
    float: right;
    width: $nav-width;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid $babyBlue;
  }
</style>
