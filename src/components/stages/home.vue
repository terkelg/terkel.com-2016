<template>
  <section class="stage stage--home">
    <div class="stage__inner">

      <h1>I'm Terkel</h1>
      <p>Interactive Designer & Developer</p>

    </div>
  </section>
</template>

<style lang="scss">
@import '../../stylesheets/variables';

.stage--home {
  width: 150%;
  text-align: center;
  h1 {
    font-size: 6em;
    font-weight: 600;
    white-space: nowrap
  }
  p {
    font-size: 1.2em;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 1px;
  }
}
@media #{$break-medium} {
  .stage--home {
    width: 100%;
    h1 {
      font-size: 7em;
    }
  }
}
@media #{$break-landscape} {}
</style>
