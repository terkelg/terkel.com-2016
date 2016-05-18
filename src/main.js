/*
  TODO:
  - Canvas placement.
  - Router / Subviews
  - 3D World

  # Nice to have
  - Lyde / Toner
  - Easter Eggs og Detaljer
  - Acceleorameter on mobile
*/
import VueRouter from 'vue-router';

import App from 'components/app';
import Home from 'components/Home';
// import Cases from 'components/Cases';

// eslint-disable-next-line
import gsap from 'gsap';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  history: true,
  pushstate: true
});

router.map({
  '/': {
    name: 'home',
    component: Home
  }

  /*
  '/cases': {
    name: 'cases',
    component: Main
  },
  '/about': {
    name: 'about',
    component: Main
  },
  '/contact': {
    name: 'contact',
    component: Main
  }
  */
});

// TODO: Implement 404 here
/*
router.redirect({
  '*': '/'
});
*/

router.start(App, '#app');
