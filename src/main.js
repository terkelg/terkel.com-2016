'use strict';

import App from 'components/App';

import Router from './core/router';

import domready from 'domready';

// eslint-disable-next-line
import gsap from 'gsap';

/*
  TODO:
  - Router / Subviews
  - Styling ...
  - 3D World

  # Nice to have
  - Lyde / Toner
  - Easter Eggs og Detaljer
  - Acceleorameter on mobile
*/

class Main {

  constructor () {
    this.router = Router;
  }

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
