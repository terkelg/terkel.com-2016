<template>
  <div class="primary">
    <p>This is primary</p>
      content here
    </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.primary {
  margin-left: $nav-width;
  padding: $border-size;
  background: green;
}

</style>

<script>
export default {
  ready () {
    console.log('Primary ready!');
    console.log(this.$route.path);
  },

  methods: {

  },

  route: {
    activate: function () {
      console.log('activate');
    },
    canDeactivate: function (transition) {
      console.log('canDeactivate');
      transition.next();
    }
  }
};
</script>
