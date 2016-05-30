<template>
  <div class="secondary-content secondary-content--cv" v-show="open" transition="fade" transition-mode="out-in">

    <article class="article">
      <header class="head">
        <img src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/Windows-XP-wallpaper.jpg" class="cover">
        <div class="head__content">
          <h1>Child of the internet</h1>
          <span class="line">Turned out better than you expected</span>
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
          <li>
            <h5 class="type">Experience</h5>
            <ul class="details-list">
              <li>Molamil</li>
            </ul>
          </li>
          <li>
            <h5 class="type">Clients</h5>
            <ul class="details-list">
              <li>After Effects</li>
              <li>JavaScript</li>
              <li>Swfit</li>
              <li>3D</li>
            </ul>
          </li>
          <li>
            <h5 class="type">Tools</h5>
            <ul class="details-list">
              <li>Cinema 3D</li>
              <li>After Effects</li>
              <li>JavaScript</li>
              <li>Swfit</li>
              <li>3D</li>
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
  data: () => {
    return {
      open: false
    };
  },

  events: {
    'route-change': function (route) {
      return true;
    },
    'secondary-opened': function () {
      this.open = true;
      return true;
    }
  },

  route: {
    activate: function ({ next }) {
      imagesLoaded(this.$el, () => {
        next();
        this.$dispatch('content-loaded');
      });
    },
    canDeactivate: function ({ next }) {
      TweenLite.to(this.$el, 0.3, {
        opacity: 0,
        onComplete: () => {
          next();
          this.$dispatch('content-destroy');
        }
      });
    }
  }
};
</script>
