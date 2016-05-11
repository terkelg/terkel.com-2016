'use strict';

import App from 'components/App';

import Router from './core/Router';

import domready from 'domready';

/*
  TODO:
  -
  - Styling ...
  - 3D World
*/

class Main {

  constructor () {
    this.addEventListeners();

    this.router = Router;
  }

  addEventListeners () {}

  start () {
    this.router.start(App, '#app');
  }
}

domready(() => {
  console.log('Lets kick it off');

  // Kick it off!
  let main = new Main();
  main.start();
});
