'use strict';

import App from 'components/app';

import Router from './core/router';

import './stylesheets/main.scss';

import domready from 'domready';

// eslint-disable-next-line
import gsap from 'gsap';

/*
  TODO:
  - Style sidebar færdig.
    - Mobil udgave
    - Scale height

  - Refacotr global SCSS, components skal splittes op i view og kode.
    - Store components kun!

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
