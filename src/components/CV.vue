<template>
  <div class="secondary-content secondary-content--cv">

    <article class="article">
      <header class="head">
        <img src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/Windows-XP-wallpaper.jpg" class="cover">
        <div class="head__content">
          <h1>About me</h1>
        </div>
      </header>

      <section class="body">
        <p>
        Hello, this is the radio24syv case
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras sed tincidunt enim. Aenean ante quam, euismod in felis at, porta mol
        estie augue. Nunc ligula quam, varius in mi quis, finibus malesuada sem. Nunc sce
        lerisque turpis turpis, sed vehicula sem pharetra vel. Morbi
      </p>

      <footer class="body__details">
        <ul class="body__details__columns">
          <li class="column column--full">
            <h5 class="type">CV</h5>
            <ul class="column__list">
              <li>Freelance: Designer & Front-End Developer</li>
              <li><a href="http://www.dmjx.dk/">Interactive Design: Danish School of Media and Journalism</a></li>
              <li><a href="http://molamil.com/">Molamil</a></li>
            </ul>
          </li>
          <li class="column">
            <h5 class="type">Clients include</h5>
            <ul class="column__list">
              <li>McDonald's</li>
              <li>MasterCard</li>
              <li>Calsberg</li>
              <li>Cocio</li>
              <li>Copenhagen Airport</li>
              <li>Experimentarium</li>
            </ul>
          </li>
          <li class="column">
            <h5 class="type">Tools include</h5>
            <ul class="column__list">
              <li>Front-End</li>
              <li>iOS Development</li>
              <li>Cinema 3D</li>
              <li>Motion Graphic</li>
              <li>3D Graphic</li>
              <li>Unity</li>
            </ul>
          </li>
        </ul>
      </footer>

    </article>

  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';
</style>

<script>
import imagesLoaded from 'imagesloaded';

export default {
  route: {
    activate: function ({ next }) {
      imagesLoaded(this.$el, () => {
        this.$dispatch('content-loaded');
        next();
      });
    },
    canDeactivate: function ({ next }) {
      TweenLite.to(this.$el, 0.3, {
        opacity: 0,
        onComplete: () => {
          this.$dispatch('content-destroy');
          next();
        }
      });
    }
  }
};
</script>
