<template>
  <div>
    <article class="article" v-if="show" transition="fade" transition-mode="out-in">
      <header class="head">
        <img src="https://placekitten.com/500/250" class="cover">
        <div class="head__content">
          <h1>Radio24syv</h1>
          <span class="line">Hej verden her er tekst</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul>
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
  </div>
</template>

<script>
export default {
  props: ['show'],

  ready () {
    /*
    console.log(imagesLoaded);
    console.log('Radioo ready');
    imagesLoaded('.article', function () {
      console.log('Images ready');
    });
    */
  }
};
</script>
