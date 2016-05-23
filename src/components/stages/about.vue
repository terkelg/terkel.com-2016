<template>
  <section class="stage stage--about" v-el:about>
    <div class="stage__inner">

      <div class="container">
        <div class="profile">
          <img src="http://placehold.it/150x150">
        </div>
        <div class="content">
          <h2>Dabbler in all things creative</h2>
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
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .profile {
    display: flex;
    flex: 1.2;
    align-self: stretch;
    img {
      align-self:center;
      border-radius: 50%;
      flex: 1;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    padding-left: 3%;
    flex: 4;
  }
  h2 { display: inline-block; }
  p {
    margin-top: 20px;
    font-size: 1.4em;
    line-height: 1.4;
  }
  a { font-weight: 600; }
}

@media #{$break-medium} {
 .stage--about {
  width: 80%;
   .container {
     max-width: 1000px;
   }
   img {}
 }
}
</style>
