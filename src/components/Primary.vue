<template>
  <div class="primary">
    <div class="primary__inner">

    <p>This is primary</p>
      content here
    </div>

  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.primary {
  margin-bottom: $nav-width + $border-size;
  padding: $border-size;
  background: green;

  .primary__inner {

  }
}

@media #{$break-medium} {
  .primary {
    margin-left: $nav-width + $border-size;
    padding: $border-size;
    background: green;
  }

  .primary__inner {

  }
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
