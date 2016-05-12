<template>
  <!-- Desktop Secondary -->
  <aside class="secondary" v-el:secondary>
    <div class="secondary__inner" v-el:inner>

      <div class="navigation" v-el:nav v-on:click.stop='clickNavigation'>
        <div class="content">

          <nav class="top-buttons">
            buttons
          </nav>

          <nav class="links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cases</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div class="bottom-content">
            2016
          </div>

        </div>
      </div>

    </div>
  </aside>
</template>

<script>
import { getSecondaryIsOpen } from '../vuex/getters';
import { setSecondaryState } from '../vuex/actions';

export default {
  ready () {
    this.secondary = this.$els.secondary;
    this.inner = this.$els.inner;
    this.nav = this.$els.nav;

    // Set up tweens
    this.sizeTween = TweenLite.to(this.secondary, 0.85, {
      className: '+=open',
      ease: Power2.easeInOut,
      onComplete: this.didOpen,
      onReverseComplete: this.didClose,
      paused: true
    });

    this.colorTween = TweenLite.to(this.inner, 0.8, {
      className: '+=open',
      ease: Power2.easeInOut,
      paused: true
    });
  },

  methods: {
    clickNavigation () {
      // TODO: There's a big when you resize to a breakpoint and open/close menu
      // the solution could be two different components. One loaded/visble if mobile, other if desktop.
      if (!this.secondaryIsOpen) {
        this.sizeTween.restart();
        this.colorTween.restart(); // reverse()
      } else {
        this.sizeTween.reverse();
        this.colorTween.reverse();
      }
    },

    didOpen () {
      console.log('Yyyaaaaay');
      this.setSecondaryState(true);
    },

    didClose () {
      console.log('Id closed!');
      this.setSecondaryState(false);
    }
  },

  vuex: {
    getters: {
      secondaryIsOpen: getSecondaryIsOpen
    },
    actions: {
      setSecondaryState: setSecondaryState
    }
  }

};
</script>

<style lang="scss">
  @import '../variables';

  .secondary {
    position: fixed;
    padding-right: $border-size;
    width: $nav-width + $border-size * 2;
    height: 100%;
    &.open { width: 100%; }
  }

  .secondary__inner {
    background-color: $white;
    width: 100%;
    width: calc(100% - 1px); // Hide left border
    height: 100%;
    padding-top: $border-size;
    padding-bottom: $border-size;
    padding-left: 0;
    padding-right: 0;
    &.open { background-color: $dark; }
  }

  .navigation {
    position: relative;;
    width: $nav-width;
    height: 100%;
    float: right;
    text-align: center;
    border-right: 1px solid pink;
    border-left: 1px solid green;

    .content {
      background-color: green;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .top-buttons {
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      background-color: red;
    }

    .links {
      position: absolute;
      top: 51%;
      margin: -45px 0 0 -366px;
      transform: rotate(90deg);
      width: 800px;
      //margin-left: -315px;

      ul {
        text-align: center;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        display: inline-block;
        a {
          padding: 0 20px;
          color: red;
          text-decoration: none;
        }
      }
    }

    .bottom-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: red;
    }

  }
</style>
