<template>
  <div class="primary">
    <div class="primary__inner">

      <home-stage v-el:home></home-stage>
      <cases-stage v-el:cases></cases-stage>
      <about-stage v-el:about></about-stage>
      <contact-stage v-el:contact></contact-stage>

    </div>
  </div>
</template>

<script>
import {
  secondaryOpen,
  secondaryClose
} from 'vuex/actions';
import { getSize, getSecondary } from 'vuex/getters';

import HomeStage from './stages/home';
import CasesStage from './stages/cases';
import AboutStage from './stages/about';
import ContactStage from './stages/contact';

export default {
  vuex: {
    actions: {
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen
    },
    getters: {
      size: getSize,
      secondary: getSecondary
    }
  },

  components: {
    'home-stage': HomeStage,
    'cases-stage': CasesStage,
    'about-stage': AboutStage,
    'contact-stage': ContactStage
  }
};
</script>
