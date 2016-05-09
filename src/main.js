'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import App from './App';
import Home from './views/Home';

// This is test components
/*
var Home = Vue.extend({
  template: '<p>This is Home</p>'
});
*/

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
});

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
  '/bar': {
    name: 'bar',
    component: Bar
  }
});

// afterEach, beforeEach
// Check out Vue.transitions
/*
router.beforeEach(function (route) {
  console.log('Router:', route)
})
*/

router.start(App, '#app');

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
});
*/
