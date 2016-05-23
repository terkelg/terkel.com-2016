<template>
  <section class="stage stage--cases" v-el:cases>
    <div class="stage__inner">

      <ul class="container">

        <li class="block">
          <a class="inner-block" @click=open>
            <div class="responsive-element">
              <div class="content">
                <h2>Radio24syv</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h2>Terrible Christmas</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h2>Radio24syv</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h2>Radio24syv</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h2>Radio24syv</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h2>Radio24syv</h2>
                <span class="link line">view case</span>
              </div>
              <span class="number">01</span>
            </div>
          </a>
        </li>

      </ul>

    </div>
  </section>
</template>

<style lang="scss">
@import '../../stylesheets/variables';

.stage--cases {
  /**
   * Responsive ratio anything (block or inline-block element)
   */
  .container {
    width: 100%;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  .block {
  	display: block;
    float: left;
  	width: 50%;
    box-sizing: border-box;
    padding: 6%;
    font-size: 16px;
    cursor: pointer;
  }
  .inner-block {
  	position: relative;
  	display: block;
  	width: 100%;
    &::after { display: none; }

    background-image: url(http://placekitten.com/200/400);
    background-size: cover;

  	/* padding bottom of desired height / desired width */
  	padding-bottom: 65%;
  }
  .responsive-element {
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;

    background-color: rgba($babyBlue, 0.50);
    transition: background 0.4s ease;
    transform: translateZ(10px); // Avoid text going beghind image
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -8%;
    font-size: 1em;
    h2 {
      font-size: 1.4em;
      line-height: 1;
      position: relative;
      &::after {
        position: absolute;
        display: inline-block;
        content: '';
        height: 0%;
        bottom: -0.10em;
        left: -0.15em;
        right: -0.15em;
        z-index: -1;
        pointer-events: none;
        background-color: $yellow;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: height 0.2s cubic-bezier(0.54, 0.08, 0, 1.18),
                    background $secondary-sec $secondary-ease;
      }
    }
    .link {
      position: relative;
      text-transform: uppercase;
      font-size: 0.55em;
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
    &::after { display: none; }
    .responsive-element { background-color: transparent; }
    .content {
      h2::after { height: 60%; }
    }
  }
}

@media #{$break-medium} {
  .stage--cases {
    .container {}
    .content {
      font-size: 1.4em;
    }
    .block {
    	width: 33.3333%;
      padding: 3% 4%;
    }
  }
}

@media #{$break-large} {
  .stage--cases {
    .content {
      font-size: 1.65em;
    }
  }
}

@media #{$break-landscape} {
  .stage--cases {
    .content {}
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
    console.log('Stage Cases ready!');
  },

  methods: {
    open () {
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
