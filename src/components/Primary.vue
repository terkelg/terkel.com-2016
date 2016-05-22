<template>
  <div class="primary" v-show="!use3D">
    <div class="primary__inner">

      <home-stage v-el:home></home-stage>
      <cases-stage v-el:cases></cases-stage>
      <about-stage v-el:about></about-stage>
      <contact-stage v-el:contact></contact-stage>
      <!---->

    </div>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

/*
 * Default
 */
.primary {
  display: none;
}
.stage {
  color: $blue;
  width: 100%;
  max-width: 1200px;
  transform: rotateZ(0);
  backface-visibility: hidden;
  background-color: pink;

  .stage__inner {}
}

@media #{$break-landscape} {
  .stage {
    background-color: green;
    width: 90%;
  }
}

/*
 * No 3D styles - Fallback
 */
.no3d {
  .primary {
    display: block!important; // TODO: delete important
    position: absolute;
    top: 0;
    right: 0;
    bottom: $nav-mobile-height + $border-size;
    left: 0;
    overflow: hidden;
    padding: $border-size $border-size 0 $border-size;
    transform: translateZ(0);

    .primary__inner {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }

  .stage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .stage__inner {
    max-width: 900px;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background-color: green;
    overflow: hidden;
  }

  /*
   * Default Desktop
   */
  @media #{$break-medium} {
    .primary {
      bottom: 0;
      left: $nav-width + $border-size;
      padding: $border-size $border-size $border-size 0;
    }
  }
}
</style>

<script>
import {
  secondaryOpen,
  secondaryClose,
  theme
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
      secondaryOpen: secondaryOpen,
      theme: theme
    },
    getters: {
      size: getSize,
      secondary: getSecondary
    }
  },

  ready () {
    console.log('Primary ready!');
  },

  data: () => {
    return {
      use3D: true
    };
  },

  methods: {
    testClick () {
      console.log('Test click!');
      if (this.secondary.status === 'open') {
        this.secondaryClose();
        this.theme('light');
      } else {
        this.theme('dark');
        this.secondaryOpen();
      }
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
