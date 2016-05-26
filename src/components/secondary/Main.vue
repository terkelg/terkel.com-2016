<template>
  <aside class="secondary" v-bind:class="['secondary--' + size.layout, secondary.status]">
    <div class="secondary__inner">

      <component :is="size.layout">
        <div slot="navigation">
          <a class="btn btn--close" @click=close>
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 26.3 26.3;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="26.3,2.8 23.5,0 13.2,10.3 2.8,0 0,2.8 10.3,13.2 0,23.5 2.8,26.3 13.2,16 23.5,26.3 26.3,23.5 16,13.2 "/>
            </svg>
          </a>

          <a class="btn btn--next" v-bind:class="next" @click=goNext v-show="this.$route.name === 'case'">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="18.7,0 15.9,2.8 23,10 0,10 0,14 23,14 15.9,21.1 18.7,24 30.7,12 "/>
            </svg>
          </a>

          <a class="btn btn--prev" v-bind:class="prev" @click=goPrevious v-show="this.$route.name === 'case'">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="30.7,14 30.7,10 7.7,10 14.8,2.8 12,0 0,12 12,24 14.8,21.1 7.7,14 "/>
            </svg>
          </a>
        </div>

        <div slot="menu">
          <ul>
            <li><a v-link="{ path: '/', exact: true }">Home</a></li>
            <li><a v-link="{ name: 'cases' }">Cases</a></li>
            <li><a v-link="'/about'">About</a></li>
            <li><a v-link="'/contact'">Contact</a></li>
          </li>
        </div>

        <div slot="section">0{{$route.index + 1}}</div>
      </component>

      <div class="content" v-el:content>
        <div class="content__inner">
            <router-view></router-view>
        </div>
      </div>

    </div>
  </aside>
</template>

<script>
import {
  secondaryOpen,
  secondaryClose
} from 'vuex/actions';

import {
  getSize,
  getSecondary,
  getCases,
  getRoute
} from 'vuex/getters';

import desktop from './Desktop';
import mobile from './Mobile';

export default {
  vuex: {
    actions: {
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen
    },
    getters: {
      size: getSize,
      secondary: getSecondary,
      cases: getCases,
      route: getRoute
    }
  },

  watch: {
    'route.path': 'setButtonState'
  },

  data: () => {
    return {
      next: 'disabled',
      prev: 'disabled'
    };
  },

  ready () {
    console.log('Main: All loaded');
  },

  methods: {
    close () {
      // TODO: Fade out content
      let backTo;
      if (this.$route.name === 'case') {
        backTo = 'cases';
      } else if (this.$route.name === 'cv') {
        backTo = 'about';
      } else {
        backTo = 'home';
      }

      // Detect when router is about to change
      this.$router.go({name: backTo});
    },

    goNext () {
      if (this.next !== 'disabled') {
        this.$router.go(this.cases[this.getIndex() + 1].id);
        this.setButtonState();
      }
    },

    goPrevious () {
      if (this.prev !== 'disabled') {
        this.$router.go(this.cases[this.getIndex() - 1].id);
        this.setButtonState();
      }
    },

    setButtonState () {
      if (this.$route.name === 'case') {
        if (this.getIndex() - 1 < 0) {
          this.prev = 'disabled';
        } else {
          this.prev = '';
        }

        if (this.getIndex() + 1 >= this.cases.length) {
          this.next = 'disabled';
        } else {
          this.next = '';
        }
      }
    },

    getIndex () {
      return this.cases.findIndex(x => x.id === this.$route.params.case);
    }
  },

  components: {
    desktop,
    mobile
  }
};
</script>

<style lang="scss" scoped>
@import '../../stylesheets/variables';

/*
 * Shared
 */
.secondary {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform $secondary-sec $secondary-ease;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  .secondary__inner {
    transform: translateZ(0);
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transition: background $secondary-sec $secondary-ease;
  }
}

/*
 * DESKTOP
 */
.secondary--desktop {
  padding-right: $border-size;
  transform: translateX(calc(-100% + #{$nav-width + $border-size * 2})); // plus page border and 1px border
  .secondary__inner {
    background-color: $white;
    padding-top: $border-size;
    padding-bottom: $border-size;
    padding-left: $border-size;
  }
}
.secondary--desktop.open {
  transform: translateX(0);
  .secondary__inner {
    background-color: $dark;
  }
}

/*
 * MOBILE
 */
.secondary--mobile {
  bottom: 0;
  transform: translateY(calc(100% - #{$nav-mobile-height + $border-size * 2})); // border size x 2
  .secondary__inner {
    background-color: $white;
    padding-left: $border-size;
    padding-right: $border-size;
    margin-top: $border-size;
  }
}
.secondary--mobile.open {
  transform: translateY(0);
  .secondary__inner {
    background-color: $dark;
  }
}


/*
 * Shared menu styles
 */
.menu {
  ul {
    margin: 0;
    padding: 0;
    user-select: none;
    text-align: center;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .btn {
    fill: $white;
    cursor: pointer;
    width: 20px;
    transition: fill 0.2s ease;
    &:hover { fill: $blue; }
    &:hover::after { display: none; }
  }
  .btn.disabled {
    fill: rgba($white, 0.2);
    cursor: default;
    transition: opacity .3s ease;
  }
}


/*
 * Secondary Content - Allow scroll Y
 */
.content {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  // background-color: green;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.content__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5%;
  margin-bottom: 80px;
}

@media #{$break-small} {
  .content__inner {
    padding: 60px;
  }
}

@media #{$break-medium} {
  .content__inner {
    padding: 120px;
  }
}

::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-thumb {
  background: $blue;
}

::-webkit-scrollbar-track {
  background: rgba($white, 0.1);
}
</style>
