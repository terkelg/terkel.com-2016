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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .secondary {
    background-color: red;
    width: 70px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: width 0.7s ease-in-out;

    &.open {
      width: 100%;
    }
  }

  nav {
    float: right;
    width: 70px;
    height: 100%;
    background-color: blue;
  }
</style>
