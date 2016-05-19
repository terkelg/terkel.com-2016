<template>
  <div>
    About View here!
  </div>
</template>

<script>
export default {
  ready () {
    console.log('About Me Details');
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
