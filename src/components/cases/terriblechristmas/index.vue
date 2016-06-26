<template>
    <article class="article">
      <header class="head">
        <img src="hero@2x.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">A Terrible Christmas</h1>
          <span class="line">The gift wrap collection</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul class="body__details__columns">
            <li class="column">
              <h5 class="type">Type</h5>
              <ul class="column__list">
                <li>Website</li>
              </ul>
            </li>
            <li class="column">
              <h5 class="type">Role</h5>
              <ul class="column__list">
                <li>Developer</li>
              </ul>
            </li>
            <li class="column column--two">
              <h5 class="type">Tools</h5>
              <ul class="column__list">
                <li>Parse</li>
                <li>Marko</li>
              </ul>
            </li>
          </ul>
        </footer>

        <p>
        Hello, this is the radio24syv case
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras sed tincidunt enim. Aenean ante quam, euismod in felis at, porta mol
        estie augue. Nunc ligula quam, varius in mi quis, finibus malesuada sem. Nunc sce
        lerisque turpis turpis, sed vehicula sem pharetra vel. Morbi
        </p>

        <img src="snapshot-1@2x.jpg" alt="Screenshot of website">

        <img src="snapshot-2@2x.jpg" alt="Screenshot of website">

        <img src="snapshot-mobile@2x.jpg" alt="Screenshot of website on mobile">

        <img src="patterns-red@2x.jpg" alt="Red gift-wrap patterns">

        <img src="patterns-green@2x.jpg" alt="Green gift-wrap patterns">

        <img src="patterns-blue@2x.jpg" alt="Blue gift-wrap patterns">

      </section>
    </article>
</template>

<script>
import imagesLoaded from 'imagesloaded';

export default {
  activate: function (insert) {
    imagesLoaded(this.$el, () => {
      insert();
      this.$dispatch('content-loaded');
    });
  },
  beforeDestroy () {
    this.$dispatch('content-destroy');
  }
};
</script>
