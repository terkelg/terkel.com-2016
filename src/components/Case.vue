<template>
  <div class="secondary-content secondary-content--case">
    {{ cases[1].id }} of {{ cases.length }}
    <component :is="$route.params.case" transition="fade" transition-mode="out-in"></component>
  </div>
</template>

<script>
import {
  getSecondary,
  getCases,
  getCurrentCase
} from 'vuex/getters';

import Radio24syv from './cases/radio24syv';
import Skagen from './cases/skagen';
import Breaker from './cases/breaker';
import Terkeliknibe from './cases/terkeliknibe';
import Thebear from './cases/thebear';
import Yeezify from './cases/yeezify';

export default {
  vuex: {
    getters: {
      secondary: getSecondary,
      cases: getCases,
      currentIndex: getCurrentCase
    }
  },

  ready () {
    console.log(this.currentIndex);
  },

  route: {
    canDeactivate: function ({ next }) {
      TweenLite.to(this.$el, 0.3, {
        opacity: 0,
        onComplete: () => {
          next();
        }
      });
    }
  },

  components: {
    Radio24syv,
    Skagen,
    Breaker,
    Terkeliknibe,
    Thebear,
    Yeezify
  }
};
</script>
