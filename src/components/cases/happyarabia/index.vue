<template>
    <article class="article">
      <header class="head">
        <img src="hero@2x.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">The Happy Arabia</h1>
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
          Parkmuseerne is a museum district in the heart of Copenhagen, consisting of six different museums.
          The assignment was to design a visual identity and build an interactive installation for their upcoming exhibition “The Happy Arabia”.
          The exhibition celebrates the 250th anniversary of the homecoming of Carsten Niebuhr from his expedition to Arabien.
        </p>

        <img src="logo@2x.jpg" alt="Logo design">

        <img src="colors@2x.jpg" alt="Colors and patterns">

        <p>The pattern was inspired by mosaic tiles, which consists of six colours. Each individual museum has its own colour and a matching monochromatic pattern.</p>

        <img src="tickets@2x.jpg" alt="Ticket design for Rosenborg and Davids Samling">

        <img src="website@2x.jpg" alt="Website design, frontpage and Rosenborg">

        <p>
          The main target group is modern families with young children, who take part in these cultural activities. However, the competitors are more child-friendly.
        </p>

        <p>
          In order to make the “The Happy Arabia” more child-friendly, and thereby attract more visitors from the target group, I designed and developed an interactive installation for kids that made use of iBeacons and visitors own devices.
        </p>

        <img src="app-1@2x.jpg" alt="App design. Explore and discovery screen">

        <img src="app-2@2x.jpg" alt="Ticket design for Rosenborg and Davids Samling">

        <div class='embed-container'>
          <iframe src='https://player.vimeo.com/video/171708909' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>

        <p>
          I developed a tool in processing to efficiently generate new patterns. The same tile is not allowed to be repeated twice, so every tile is aware of its neighboring tiles.
        </p>

        <img src="tool@2x.jpg" alt="Processing tool to generate patterns">

        <p>
          The pattern tool was a design tool built mainly to help during the design process. It was daunting to manually stack the tiles and test the weight and distribution of colors in the pattern every time I changed a tile. I ended up with a user-friendly tool that could export both bitmap and vector patterns, and could be handed over to the client as a part of the package.
        </p>

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
