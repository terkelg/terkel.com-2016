<template>
  <section class="stage stage--about" v-el:about>
    <div class="stage__inner">

      <div class="container">
        <img src="http://placehold.it/150x150">
        <div class="content">
          <h2 class="boxed">Dabbler in all things creative</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nunc lacinia, commodo metus nec, auctor ex. Quisque vulputate arcu lorem, vel convallis ipsum blandit et. Quisque a magna ac nibh commodo congue eu vitae dolor.</p>
          <a class="line" href="#">PSST There's more. Click me, I dare you</a>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
@import '../../stylesheets/variables';

.stage--about {
  .container {
    display: block;
    max-width: 800px;
    height: auto;
  }
  img {
    border-radius: 50%;
    float: left;
    margin-right: 5%;
    width: 20%;
  }
  .content {
    float: left;
    width: 75%;
  }
  h2 {
    font-size: 1.8em;
    display: inline-block;
    text-align: left;
    margin: 0;
  }
  p {
    margin-top: 20px;
    line-height: 1.5;
  }
  a { font-weight: 600; }
}
</style>
