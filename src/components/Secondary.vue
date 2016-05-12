<template>
  <aside class="secondary" v-el:secondary>
    <div class="secondary__inner" v-el:inner>
      <nav class="navigation" v-el:nav v-on:click.stop='clickNavigation'>

        <div class="cases-nav">
        </div>

        <ul>
          <li>Home</li>
          <li>Cases</li>
          <li>About</li>
          <li>Contact</li>
        <li>

        <img src="">

        <a v-on:click.stop='clickNavigation'>Sidebar</a>

      </nav>
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
      console.log('You clicked the nav: ', this.sizeTween);

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

<style lang="scss" scoped>
  @import '../variables';

  // Naviger med GreenSock så jeg får callback
  .secondary {
    position: fixed;
    padding-right: $border-size;
    width: $nav-width + $border-size * 2;
    &.open { width: 100%; }

    .secondary__inner {
      background-color: $white;
      width: 100%;
      height: 100vh;
      padding-top: $border-size;
      padding-bottom: $border-size;
      &.open { background-color: $dark; }

      .navigation {
        width: $nav-width;
        height: 100%;
        float: right;
        padding: 8px;
        border-right: 1px solid pink;
        border-left: 1px solid green;
      }
    }
  }
</style>
