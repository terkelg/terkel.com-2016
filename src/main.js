/*
  TODO:
  - 3D World

  # Nice to have
  - Lyde / Toner
  - Easter Eggs og Detaljer
  - Acceleorameter on mobile
*/
import VueRouter from 'vue-router';

import App from 'components/App';
import Case from 'components/Case';
import About from 'components/About';

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
    index: 0,
    component: {}
  },
  '/cases': {
    name: 'cases',
    index: 1,
    component: {}
  },
  '/cases/:case': {
    name: 'case',
    index: 1,
    component: Case
  },
  '/about': {
    name: 'about',
    index: 2,
    component: About
  },
  '/about/cv': {
    name: 'cv',
    index: 2,
    component: {}
  },
  'contact': {
    name: 'contact',
    index: 3,
    component: {}
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
    // console.log(transition.to.path);
    // set state!
    transition.next();
  }
});

router.start(App, '#app');
