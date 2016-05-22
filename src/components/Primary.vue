<template>
  <div class="primary" v-show="!use3D">
    <div class="primary__inner">

      <section class="stage stage--home" v-el:home>
        <div class="stage__inner">
          <h1>I'm Terkel</h1>
          <p>Interactive Designer & Developer</p>
          <a href="#" @click=testClick>content here</a>
        </div>
      </section>

      <section class="stage stage--cases" v-el:cases>
        <div class="stage__inner">

          <ul class="container">
            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>

            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>

            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>

            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>

            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>

            <li class="block">
              <a class="inner-block">
                <div class="responsive-element">
                  <div class="content">
                    <h1>Radio24syv</h1>
                    <span class="link">view case</span>
                  </div>
                  <span class="number">01</span>
                </div>
              </a>
            </li>
          </ul>

        </div>
      </section>

      <section class="stage stage--about" v-el:about>
        <div class="stage__inner">
          <p>About me</p>
        </div>
      </section>

      <section class="stage stage--contact" v-el:contact>
        <div class="stage__inner">
          <p>Contact me!</p>
        </div>
      </section>

    </div>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';

.primary {
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
  // transform: translateY(0);
  .stage__inner {
    transform: translateY(0);
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
  background-color: red;
  /**
   * Responsive ratio anything (block or inline-block element)
   */
  .container {
    display: block;
  	width: 900px;
    // height: 300px;
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
        &::before {
          content: '';
          display: inline-block;
          float: left;
          background-color: blue;
          width: 20%;
          margin-right: 1em;
          margin-top: 0.72em;
          height: 0.1em;
        }
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
  }
  .block:hover {
    &::after {
      display: none;
    }
    .responsive-element { background-color: transparent; }
    h1 {}
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
