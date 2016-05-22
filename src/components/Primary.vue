<template>
  <div class="primary" v-show="!use3D">
    <div class="primary__inner">

      <home-stage v-el:home></home-stage>
      <cases-stage v-el:cases></cases-stage>
      <about-stage v-el:about></about-stage>
      <contact-stage v-el:contact></contact-stage>

    </div>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.primary {
  // position: absolute;
  // display: block!important;
  transform: translateY(0);
  margin-bottom: $nav-width + $border-size;
  padding: $border-size;
  .primary__inner {}
}

.stage {
  color: $blue;
  // transform: translateY(0);
  // width: 100%;
  // height: 100%;
  transform: translateY(0);
  .stage__inner {
    // transform: translateY(0);
    backface-visibility: hidden;
  }
}

.stage--home {
  text-align: center;
  h1 {
    font-size: 7em;
    font-weight: 600;
  }
  p {
    font-size: 1.2em;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 1px;
  }
}

.stage--cases {
  /**
   * Responsive ratio anything (block or inline-block element)
   */
  .container {
    display: block;
  	width: 900px;
    // height: auto;
    transform: translateY(0);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .block {
  	display: block;
    float: left;
  	width: 33.3333%;
    box-sizing: border-box;
    padding: 3%;
    font-size: 16px;
  }
  .inner-block {
  	position: relative;
  	display: block;
  	width: 100%;
    &::after { display: none; }

  	/* padding bottom of desired height / desired width */
  	padding-bottom: 70%;
  }
  .responsive-element {
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -8%;
    h1 {
      margin: 0;
      font-size: 1.8em;
      font-weight: 600;
    }
    .link {
      position: relative;
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
  .number {
    position: absolute;
    right: 4%;
    bottom: 4%;
    font-size: 2em;
    color: rgba($white, 0.5);
    font-weight: 600;
    user-select: none;
  }

  .block:hover {
    &::after {
      display: none;
    }
    .responsive-element { background-color: transparent; }
    h1 {}
  }
}

.stage--about {
  .container {
    display: block;
    max-width: 800px;
    height: auto;
  }
  img {
    border-radius: 50%;
    float: left;
    margin-right: 5%;
    width: 20%;
  }
  .content {
    float: left;
    width: 75%;
  }
  h2 {
    font-size: 1.8em;
    display: inline-block;
    text-align: left;
    margin: 0;
  }
  p {
    margin-top: 20px;
    line-height: 1.5;
  }
  a { font-weight: 600; }
}

.stage--contact {
  .container {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;

    .social {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      &::before {
        content: '';
        display: block;
        width: 100px;
        height: 2px;
        background-color: $blue;
        margin: 28px auto;
      }
    }
    li {
      margin: 0 8px;
      display: inline-block;
    }
    a {
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
}

/*
 * Mobile
 */
 @media #{$break-medium} {
 .stage--cases {
   .block {
     .inner-block {
       background-image: url(http://placekitten.com/200/400);
       background-size: cover;
     }
     .responsive-element {
       background-color: rgba($babyBlue, 0.50);
       transition: background 0.4s ease;
     }
     .number {}
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
