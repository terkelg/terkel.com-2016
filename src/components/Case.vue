<template>
  <div>
    <component :is="$route.params.case" transition="fade" transition-mode="out-in"></component>
  </div>
</template>

<style scoped>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<script>
import {
  secondaryOpen,
  secondaryClose
} from 'vuex/actions';

import Radio24syv from './cases/radio24syv';
import Skagen from './cases/skagen';

export default {
  vuex: {
    actions: {
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen
    }
  },

  ready () {},

  methods: {
    getIndex () {
      return this.cases.findIndex(x => x.id === this.$route.params.case);
    }
  },

  components: {
    Radio24syv,
    Skagen
  },

  route: {
    activate: function () {
      console.log('You loaded me!');
    },
    canDeactivate: function (transition) {
      transition.next();
    }
  }
};
</script>
