'use strict';

import App from 'components/app';

import Router from 'core/router';

import 'stylesheets/main.scss';

import domready from 'domready';

// eslint-disable-next-line
import gsap from 'gsap';

/*
  TODO:
  - Style sidebar færdig.
    - Mobil udgave
    - Scale height

  - SCSS Mixins, der er nogle gode i hans boilerplate

  - Router / Subviews
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
  let main = new Main();
  main.start();
});
