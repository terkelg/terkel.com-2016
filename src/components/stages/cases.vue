<template>
  <section class="stage stage--cases" v-el:cases>
    <div class="stage__inner">

      <ul class="container">

        <li class="block" v-for="case in cases">
          <a v-link="{name: 'case', params: {case: case.id}}" class="inner-block" v-bind:style="{ backgroundImage: 'url(' + case.thumbnail + ')' }">
            <div class="responsive-element">
              <div class="content">
                <h2>{{ case.title }}</h2>
                <span class="link line">view case</span>
              </div>
            </div>
          </a>
        </li>

      </ul>

    </div>
  </section>
</template>

<style lang="scss" scoped>
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
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
    cursor: pointer;
  }
  .inner-block {
    &::after {
      display: none;
    }
  }
  .responsive-element {}
  .content {
    margin-bottom: 70px;
    h2 {
      font-size: 1.75em;
      line-height: 1;
      position: relative;
    }
    .link {
      position: relative;
      text-transform: uppercase;
      font-size: 0.65em;
      font-weight: 600;
    }
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
    .block {
    	width: 33.3333%;
      padding: 3% 4%;
      text-align: left;
      float: left;
    }
    .inner-block {
      position: relative;
      display: block;
      width: 100%;
      background-size: cover;
      &::after { display: none; }
      /* padding bottom of desired height / desired width */
      padding-bottom: 65%;
    }
    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -8%;
      font-size: 1em;
      margin: 0;
      h2 {
        // font-size: 1.4em;
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
    }
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
}

@media #{$break-large} {
  .stage--cases {
  }
}

@media #{$break-landscape} {
  .stage--cases {
    .content {}
  }
}
</style>

<script>
import { getCases } from 'vuex/getters';

export default {
  vuex: {
    getters: {
      cases: getCases
    }
  },

  ready () {}
};
</script>
