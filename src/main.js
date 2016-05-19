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

import App from 'components/App';
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
  '/cases/:case': {
    name: 'cases',
    component: Home
  },
  '/about': {
    name: 'about',
    component: Home
  }
});

// TODO: Implement 404 here
/*
router.redirect({
  '*': '/'
});
*/

router.beforeEach(function (transition) {
  if (transition.to.path === '/forbidden') {
    // TODO: Hvis til en secondary ting, open menu og gå til dark mode
    // when done, do transition
    transition.abort();
  } else {
    console.log(transition.to.path);
    // set state!
    transition.next();
  }
});

router.start(App, '#app');
