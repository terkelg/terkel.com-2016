<template>
  <section class="stage stage--cases" v-el:cases>
    <div class="stage__inner">

      <ul class="container">

        <li class="block">
          <a class="inner-block">
            <div class="responsive-element">
              <div class="content">
                <h1>Radio24syv</h1>
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
                <h1>Radio24syv</h1>
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
                <h1>Radio24syv</h1>
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
                <h1>Radio24syv</h1>
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
                <h1>Radio24syv</h1>
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
                <h1>Radio24syv</h1>
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
    list-style: none;
    width: 1000px;
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
</style>
