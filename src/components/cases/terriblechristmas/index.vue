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
          The collection of anti-Christmas gift wrapping dedicated as a humorous present for partners of Molamil, or anyone who just wants to inject a little bit of dark humor into their holidays and make a silent protest. Partners could login using a special link, and order two gift wraps free of charge. My primary role was to develop the website and integrate the partner login.
        </p>

        <p>
          I had to develop the site in almost no time, which was a fun challenge. At the same time I had to learn Parse and how to do user authentication using only front-end technologies, which was an instructive experience.
        </p>

        <img src="snapshot-1@2x.jpg" alt="Screenshot of website">

        <img src="snapshot-2@2x.jpg" alt="Screenshot of website">

        <img src="snapshot-mobile@2x.jpg" alt="Screenshot of website on mobile">

        <img src="patterns-red@2x.jpg" alt="Red gift-wrap patterns">

        <img src="patterns-green@2x.jpg" alt="Green gift-wrap patterns">

        <img src="patterns-blue@2x.jpg" alt="Blue gift-wrap patterns">

        <p>Go ahead, check it out at <a href="http://www.terriblechristmas.com/">www.terriblechristmas.com</a>.</p>

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
