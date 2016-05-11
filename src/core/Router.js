
import Vue from 'vue'; // Try to remove this
import VueRouter from 'vue-router';

import Home from 'components/Home'; // ../??

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
});

export default router;

// afterEach, beforeEach
// Check out Vue.transitions
/*
router.beforeEach(function (route) {
  console.log('Router:', route)
})
*/
