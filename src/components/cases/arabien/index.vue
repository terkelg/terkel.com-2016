<template>
    <article class="article">
      <header class="head">
        <img src="hero@2x.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">Det Lykkelige Arabien</h1>
          <span class="line">Visual identity</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul class="body__details__columns">
            <li class="column">
              <h5 class="type">Type</h5>
              <ul class="column__list">
                <li>Visual identity</li>
                <li>Installation</li>
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
                <li>Processing</li>
                <li>After Effects</li>
                <li>Swift</li>
                <li>iBeaoncs</li>
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

        <img src="logo@2x.jpg" alt="Logo design">

        <img src="colors@2x.jpg" alt="Colors and patterns">

        <img src="tickets@2x.jpg" alt="Ticket design for Rosenborg and Davids Samling">

        <img src="website@2x.jpg" alt="Website design, frontpage and Rosenborg">

        <img src="app-1@2x.jpg" alt="App design. Explore and discovery screen">

        <img src="app-2@2x.jpg" alt="Ticket design for Rosenborg and Davids Samling">

        <div class='embed-container'>
          <iframe src='https://player.vimeo.com/video/171708909' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <img src="tool@2x.jpg" alt="Processing tool to generate patterns">

        <img src="prototype@2x.jpg" alt="Prototype and iBeacons, developed in Swift">

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
