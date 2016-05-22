<template>
  <div class="primary" v-show="!use3D">
    <div class="primary__inner">

      <section class="stage" v-el:home>
        <p><h1>I'm Terkel</h1></p>
        <p><a href="#" @click=testClick>content here</a></p>
      </section>

      <section class="stage" v-el:cases>
        <p>This is Cases</p>
        <p>Nice right?</p>
      </section>

      <section class="stage" v-el:about>
        <p>About me</p>
      </section>

      <section class="stage" v-el:contact>
        <p>Contact me!</p>
      </section>

    </div>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.primary {
  transform: translateY();
  margin-bottom: $nav-width + $border-size;
  padding: $border-size;
  .primary__inner {}
}

.stage {}
.no3d .stage {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align: center;
}

@media #{$break-medium} {
  .primary {
    margin-left: $nav-width + $border-size;
    padding: $border-size;
  }
  .primary__inner {}
}
</style>

<script>
import {
  secondaryOpen,
  secondaryClose,
  theme
} from 'vuex/actions';
import { getSize, getSecondary } from 'vuex/getters';

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
  }
};
</script>
