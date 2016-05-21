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
    component: {}
  },
  '/cases': {
    name: 'case',
    component: {}
  },
  '/cases/:case': {
    name: 'cases',
    component: Case
  },
  '/about': {
    name: 'about',
    component: About
  },
  '/about/cv': {
    name: 'cv',
    component: {}
  },
  'contact': {
    name: 'contact',
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
