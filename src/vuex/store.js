import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  windowSize: {width: window.innerWidth, height: window.innerHeight},
  windowVisible: document.visibilityState,
  playSound: true,
  debug: true
};

const mutations = {
  WINDOW_RESIZE (state) {
    state.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  WINDOW_VISIBLE (state, focus) {
    state.windowVisible = document.visibilityState;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
