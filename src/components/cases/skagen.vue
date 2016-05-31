<template>
    <article class="article">
      <header class="head">
        <img src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/Windows-XP-wallpaper.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">Skagen</h1>
          <span class="line">Hej verden her er tekst</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul class="body__details__columns">
            <li>
              <h5 class="type">Type</h5>
              Web Design
            </li>
            <li>
              <h5 class="type">Date</h5>
              11/06/12
            </li>
            <li>
              <h5 class="type">Role</h5>
              Front-end
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

        <img src="https://placekitten.com/500/300">

        <p>
        Hello, this is the radio24syv case
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras sed tincidunt enim. Aenean ante quam, euismod in felis at, porta mol
        estie augue. Nunc ligula quam, varius in mi quis, finibus malesuada sem. Nunc sce
        lerisque turpis turpis, sed vehicula sem pharetra vel. Morbi
        </p>

        <img src="https://placekitten.com/500/300">

        <h3>Hello, this is the radio24syv case</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras sed tincidunt enim. Aenean ante quam, euismod in felis at, porta mol
        estie augue. Nunc ligula quam, varius in mi quis, finibus malesuada sem. Nunc sce
        lerisque turpis turpis, sed vehicula sem pharetra vel. Morbi. Sidste ord.
        </p>

        <!--
        <iframe class="player" src="//player.vimeo.com/video/66006284" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        -->

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
      console.log('Skagen Content Loaded');
    });
  },
  beforeDestroy () {
    console.log('Skagen Destroy!');
    this.$dispatch('content-destroy');
  }
};
</script>
