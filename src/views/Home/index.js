'use strict';

import Vue from 'vue';
import Webgl from './../../components/Webgl';

// import './styles.scss';
// import components

export default Vue.extend({
  template: require('./template.html'),

  ready () {
    let webgl = new Webgl({
      debug: true
    });

    webgl.init();
  }
});
