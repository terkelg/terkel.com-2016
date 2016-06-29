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
          At the very top of Denmark is the town Skagen. The town is known for its famous painters who portrayed the amazing light and nature of Skagen.
        </p>

        <p>
          Our assignment was to create a campaign website for Skagen Museum, that would catch visitors attention and provide an immersive experience.
        </p>

        <p>
          In this project, my aim was to show visitors that the ‘Skagen magic’ is still alive today, by showing the paintings in their represent-day surroundings using WebVR.
        </p>

        <img src="snapshot-1@2x.jpg" alt="Start screen in browser mockup">

        <p>
          On the landing page you choose how you want to view the experience. The website is mainly designed for Google Cardboard, but also support gyroscope navigation on mobile devices, and navigation by coursur on desktop as a fallback.
        </p>

        <p>
          The core concept was to incorporate the famous light of Skagen as part of the online experience. This was achieved by sorting the paintings by light and time, and then allowing the user to navigate in 360° using Google Cardboard.
        </p>

        <img src="snapshot-2@2x.jpg" alt="Main screen sunrise in browser mockup">

        <p>
          A full 360° rotation correspond to 24 hours. As you look around in the main navigation, the light and time of the day changes.
        </p>

        <img src="snapshot-3@2x.jpg" alt="Main screen sunset in browser mockup">

        <p>
          Once a painting is selected, the user can see its surroundings and listen to a narrator who tells the story behind the painting, its painter and the location itself.
        </p>

        <img src="snapshot-4@2x.jpg" alt="Painting view screen in browser mockup">

        <p>
          Below is a video simulating the 360° user experience from start to finish.
        </p>

        <div class='embed-container'>
          <iframe src='https://player.vimeo.com/video/171822396' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <p>
          It was a UX challenge to design a website for Google Cardboard, which only have one button and no cursor. It called for a lot of sketching and wireframing.
        </p>

        <img src="sketches@2x.jpg" alt="Wireframing and sketches of the UI and UX">

        <p>
          Cinema 4D was also used in combination with After Effects to illustrate the experience. I’m a big fan of Xpresso, which I used to script a simple interface to control the camera and deformers.
        </p>

        <img src="cinema4d-1@2x.jpg" alt="Screenshot of how I used Cinema 4D">

        <img src="cinema4d-2@2x.jpg" alt="Screenshot of how I used Cinema 4D and xpresso">

        <p>
          In addition, I developed a quick Google Cardboard prototype in Unity to demonstrate how the UX and feel of the navigation is supposed to work. Cinema 4D was also used in combination with After Effects to illustrate the experience. I’m a big fan of Xpresso, which I used to script a simple interface to control the camera and deformers.
        </p>

        <img src="prototype@2x.jpg" alt="Prototype build in Unity and Google Cardboards">

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
