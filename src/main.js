/*
  TODO:
  - 3D World

  # Nice to have
  - Lyde / Toner
  - Easter Eggs og Detaljer
  - Acceleorameter on mobile
*/
import { sync } from 'vuex-router-sync';
import store from 'vuex/store';
import VueRouter from 'vue-router';

import App from 'components/App';
import Case from 'components/Case';

// eslint-disable-next-line
import gsap from 'gsap';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  history: true,
  pushstate: true
});

sync(store, router);

router.map({
  '/': {
    name: 'home',
    index: 0,
    component: {
      template: '<div></div>'
    }
  },
  '/cases': {
    name: 'cases',
    index: 1,
    component: {
      template: '<div></div>'
    }
  },
  '/cases/:case': {
    name: 'case',
    index: 1,
    secondary: true,
    component: Case
  },
  '/about': {
    name: 'about',
    index: 2,
    component: {
      template: '<div></div>'
    }
  },
  '/about/cv': {
    name: 'cv',
    index: 2,
    secondary: true,
    component: {
      template: '<div></div>'
    }
  },
  'contact': {
    name: 'contact',
    index: 3,
    component: {
      template: '<div></div>'
    }
  }
});

// TODO: Implement 404 here
/*
router.redirect({
  '*': '/'
});
*/

router.start(App, '#app');
