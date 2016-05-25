<template>
  <div>
    <component :is="$route.params.case"></component>
  </div>
</template>

<script>
import {
  secondaryOpen,
  secondaryClose,
  theme
} from 'vuex/actions';

import Radio24syv from './cases/radio24syv';
import Skagen from './cases/skagen';

export default {
  vuex: {
    actions: {
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen,
      theme: theme
    }
  },

  ready () {
    console.log(this.$route.params);
    console.log(this.$route.query);

    this.theme('dark');
    this.secondaryOpen();
  },

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
      // if ()
    },
    canDeactivate: function (transition) {
      transition.next();
    }
  }
};
</script>
