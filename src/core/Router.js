
import Vue from 'vue'; // Try to remove this
import VueRouter from 'vue-router';

import Home from 'components/Home';
import Cases from 'components/Cases';

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
  },
  '/cases': {
    name: 'cases',
    component: Cases
  }
});

// TODO: Implement 404 here
router.redirect({
  '*': '/'
});

router.beforeEach(function (transition) {
  console.log('beforeRouter:', transition);
  transition.next();
  // .abort(), .redirect(), .from(), .to(), .to.path()
});

router.afterEach(function (transition) {
  console.log('afterRouter:', transition);
});

export default router;
