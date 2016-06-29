<template>
  <div class="secondary-content secondary-content--cv">

    <article class="article">
      <header class="head">
        <img src="terkel@2x.jpg" class="cover">
        <div class="head__content">
          <h1>About me</h1>
        </div>
      </header>

      <section class="body">

        <p>
          I’m a 22-year-old Danish Interactive Design student at the Danish School of Media and Journalism,
          and part time creative developer at the digital agency Molamil. I'm half-designer, half-developer
          and when the two come together that’s my sweet spot. I’ve been crafting and making stuff as long as I remember.
          It all started with LEGO bricks and slowly evolved into pixels, code and digital products.
        </p>

        <p>
          I’m not a fan of specific labeling. I strongly believe that the best designers don't specialize in any one thing, but rather keep exploring and learning.
          Being a generalist myself, means I can be a part of and contribute to the entire process from start to finish.
          I learn by doing and I’m not afraid of new tools or challenges.
        </p>

        <p>
          I have a challenge going on where I have to come up with at least one idea a day.
          I’ve been doing that since May 2014. At the time of writing, I came up with 1033 ideas in 790 days.
          I keep all my ideas in Day One, which is one of my favorite apps together with Tweetbot and Overcast.
        </p>

        <p>
          You can always recognize me wearing on my black jeans, and one of my many Supreme five-panels.
          When I am not sitting in front of a computer, I spaz out to Hip-Hop or chill with tech and design related podcasts.
          A big regret of mine is I didn’t learn to skate, but on the other hand I became a pretty decent runner.
          I watch a lot of movies and have currently rated 719 movies on IMDb – with still 261 to go on my watchlist.
          Among my favorites you find Memento, Snatch, Pulp Fiction and City of God. I also enjoy to talk with friends and colleagues a cold beer, or two… maybe three.
        </p>

        <p>And hey, I’m looking for internship this fall.</p>

        <footer class="body__details">
          <ul class="body__details__columns">
            <li class="column column--full">
              <h5 class="type">CV</h5>
              <ul class="column__list">
                <li><span class="highlight line line--small">Freelance:</span> Designer & Front-End Developer</li>
                <li><a href="http://www.dmjx.dk/"><span class="highlight line line--small">Interactive Design:</span> Danish School of Media and Journalism</a></li>
                <li><a href="http://molamil.com/"><span class="highlight line line--small">Molamil:</span> Creative Developer Assistant</a></li>
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
                <li>Git</li>
                <li>Cinema 3D</li>
                <li>Motion Graphic</li>
                <li>3D Graphic</li>
                <li>Unity</li>
              </ul>
            </li>
          </ul>
        </footer>


      </section>
    </article>

  </div>
</template>

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
