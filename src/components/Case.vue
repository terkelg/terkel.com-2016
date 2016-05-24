<template>
  <div>
    Load case '{{ $route.params }}' here ({{$route.query}})'
    Load case based on query!
  </div>
</template>

<script>
export default {
  ready () {
    console.log('About Me Details');
    console.log(this.$route.params);
    console.log(this.$route.query);
  },
  methods: {},
  route: {
    activate: function () {
      console.log('You loaded me!');
      // if ()
    },
    canDeactivate: function (transition) {
      transition.next();
    }
  }
};
</script>
