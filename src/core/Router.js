
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/Home';
import Cases from 'components/Cases';
import About from 'components/About';
import Contact from 'components/Contact';
import Case from 'components/Case';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  history: true,
  pushstate: true
});

/*
 * This could go to the same component?
 * I don't see why I need that many empy components.
 * Also, I can use them as sub components in the same component and them
 * both use Vue to mange the content and load them into CSS3Renderer?
 * Tjek i component hvor folk kommer fra, hvilken URL og gør ting baseret på det.
 */
router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/cases': {
    name: 'cases',
    component: Cases
  },
  '/cases/:case': {
    name: 'case',
    component: Case
  },
  'about': {
    name: 'about',
    component: About
  },
  'contact': {
    name: 'contact',
    component: Contact
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
