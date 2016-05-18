<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  ready () {
    console.log('Navigate to home position!');
  },
  methods: {},
  route: {
    activate: function () {},
    canDeactivate: function (transition) {
      transition.next();
    }
  }
};
</script>
