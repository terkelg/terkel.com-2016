<template>
  <div class="case">
    <component :is="$route.params.case" v-show="show" transition="fade" transition-mode="out-in"></component>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.case {
  $case-content-width: 100%;
  position: relative;
  color: $white;
  line-height: 1.85;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    margin: 15% 0;
  }
  img.cover { margin: 0; }
  .head__content {
    margin: 35px 0;
    h1 {
      font-size: 2.5em;
      color: $white;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 0;
    }
    .line {
      &::before {
        height: 1px;
        background: $blue;
      }
      color: $white;
      text-transform: uppercase;
      font-size: 0.85em;
      letter-spacing: 1.2px;
    }
  }
  .body {
    margin: 0 auto;
    font-size: 1.0em;
    p {
      width: $case-content-width;
      margin: 0 auto;
    }
    h3 {
      width: $case-content-width;
      margin: 0 auto;
      font-size: 1em;
    }
  }
  .body__details {
    width: $case-content-width;
    margin: 40px auto;
    ul {
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    li {
      h5 {
        font-weight: 200;
        text-transform: uppercase;
        font-size: 0.65em;
        letter-spacing: 1px;
        color: $babyBlue;
        margin: 0;
        &::after {
          content: '';
          height: 1px;
          display: block;
          background-color: $white;
          width: 12px;
          margin: 4px 0;
        }
      }
      font-size: 0.95em;
      width: 33.333333333%;
      list-style: none;
      display: block;
      float: left;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }
}
@media #{$break-small} {
  .case {
    $case-content-width: 100%;
    img { margin: 6% 0; }
    .head { position: relative; }
    .head__content {
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -4.5%;
      h1 { font-size: 2.5em; }
    }
    .body {
      font-size: 1.2em;
    }
  }
}

@media #{$break-medium} {
  .case {
    $case-content-width: 85%;
    .head__content {
      left: -8%;
      h1 { font-size: 3.5em; }
    }
    .body {
      p, h3 { width: $case-content-width; }
    }
    .body__details {
      margin: 50px auto;
      width: $case-content-width;
    }
  }
}

@media #{$break-large} {
  .case {
    $case-content-width: 70%;
    .body {
      p, h3 { width: $case-content-width; }
    }
    .body__details {
      width: $case-content-width;
    }
  }
}
</style>

<script>
// import imagesLoaded from 'imagesloaded';

import {
  getSecondary,
  getCases
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
      cases: getCases
    }
  },

  data: () => {
    return {
      show: true
    };
  },

  ready () {
    console.log('Cases loaded');
  },

  methods: {
    routeChange () {
      // Now the route is changing, check if I should hide the component
      console.log('Cases change route', this.secondary.status);
      if (this.secondary.status !== 'open') {
        this.show = false;
      }
    }
  },

  events: {
    'route-change': function (e) {
      console.log('Route change', e);
    },

    'window-resize': function (e) {
      console.log('Wiiindo', e);
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
