<template>
    <article class="article">
      <header class="head">
        <img src="hero@2x.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">Skagen Museum</h1>
          <span class="line">Immersive Website</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul class="body__details__columns">
            <li class="column">
              <h5 class="type">Type</h5>
              <ul class="column__list">
                <li>Immersive Website</li>
                <li>Campaign</li>
              </ul>
            </li>
            <li class="column">
              <h5 class="type">Role</h5>
              <ul class="column__list">
                <li>Concept</li>
                <li>Design</li>
                <li>Programming</li>
              </ul>
            </li>
            <li class="column column--two">
              <h5 class="type">Tools</h5>
              <ul class="column__list">
                <li>Cinema 4D</li>
                <li>After Effects</li>
                <li>Unity</li>
                <li>Google Cardboard</li>
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

        <img src="snapshot-1@2x.jpg" alt="Start screen in browser mockup">

        <img src="snapshot-2@2x.jpg" alt="Main screen sunrise in browser mockup">

        <img src="snapshot-3@2x.jpg" alt="Main screen sunset in browser mockup">

        <img src="snapshot-4@2x.jpg" alt="Painting view screen in browser mockup">

        <div class='embed-container'>
          <iframe src='https://player.vimeo.com/video/171822396' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <img src="sketches@2x.jpg" alt="Painting view screen in browser mockup">

        <img src="cinema4d-1@2x.jpg" alt="Painting view screen in browser mockup">

        <img src="cinema4d-2@2x.jpg" alt="Painting view screen in browser mockup">

        <img src="prototype@2x.jpg" alt="Painting view screen in browser mockup">

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
