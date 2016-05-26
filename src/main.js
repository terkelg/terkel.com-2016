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

// import Radio24syv from 'components/cases/radio24syv';
// import Breaker from 'components/cases/breaker';

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
    component: {}
  },
  '/case': {
    name: 'cases',
    index: 1,
    component: Case,
    subRoutes: {
      '/:case': {
        name: 'case',
        component: {
          ready () { console.log('Test!', this.$route.path); }
        }
      }
    }
  },
  '/about': {
    name: 'about',
    index: 2,
    component: {}
  },
  '/about/cv': {
    name: 'cv',
    index: 2,
    secondary: true,
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

router.start(App, '#app');
