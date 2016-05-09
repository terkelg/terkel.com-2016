'use strict';

import Vue from 'vue';
import Webgl from './../../modules/Webgl';

import Quick from '../../modules/Object3D';

// import './styles.scss';
// import components

export default Vue.extend({
  template: require('./template.html'),

  ready () {
    let webgl = new Webgl({
      debug: true
    });

    let quick = new Quick();

    webgl.addObject(quick);

    webgl.init();
  }

});
