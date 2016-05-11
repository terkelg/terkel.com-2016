import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  screenSize: {width: 0, height: 0}
};

const mutations = {
  WINDOW_RESIZE (state, event) {
    state.screenSize = {width: event.innerWidth, height: event.innerHeight};
  }
};

export default new Vuex.Store({
  state,
  mutations
});
