<template>
    <article class="article">
      <header class="head">
        <img src="hero@2x.jpg" class="cover">
        <div class="head__content">
          <h1 class="boxed">Radio24syv</h1>
          <span class="line">Apple Watch App</span>
        </div>
      </header>

      <section class="body">

        <footer class="body__details">
          <ul class="body__details__columns">
            <li class="column">
              <h5 class="type">Type</h5>
              <ul class="column__list">
                <li>iOS</li>
                <li>Watch App</li>
              </ul>
            </li>
            <li class="column">
              <h5 class="type">Role</h5>
              <ul class="column__list">
                <li>Design</li>
                <li>Development</li>
              </ul>
            </li>
            <li class="column column--two">
              <h5 class="type">Tools</h5>
              <ul class="column__list">
                <li>Swift</li>
                <li>CocoaPods</li>
                <li>Xcode</li>
              </ul>
            </li>
          </ul>
        </footer>

        <p>
          Radio24syv is a Danish public service channel, broadcasting talk radio 24 hours a day.
          In connection with their new app, it was my job to design and develop the Apple Watch extension.
          It is designed to look like a scaled down version of the main app to keep consistency between the app and the watch extension.
          It was a challenge to scale the UI and still provide access to all of the core features such as playback, switch between podcast and live radio, and listen the latest news.
        </p>

        <img src="homescreen@2x.jpg" alt="Radio24syv Watch App on homescreen">

        <p>
          It was developed in Swift in order to make use of all the latest Watch features, such as glances, dynamic notifications, and watch complications. I did all the design and prototyping directly in Xcode, which also had the side effect of improving development time.
        </p>

        <img src="app@2x.jpg" alt="Radio24syv Watch App">

        <img src="player@2x.jpg" alt="Radio24syv Watch App Player">

        <img src="screens@2x.jpg" alt="Radio24syv Watch App Screens">

        <img src="extra@2x.jpg" alt="Radio24syv Watch App Notification and Glance">

        <p>
          The Watch App is designed to be used when you’re on the road. That’s why glances and watch complications was essential part of the Watch app. It also makes great use of haptics to give tactile feedback to the user.
        </p>

        <img src="photo@2x.jpg" alt="Photo of the watch app in use">

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
