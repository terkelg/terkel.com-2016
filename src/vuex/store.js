import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Store / State
// Every component can read the current state via getters
const state = {
  windowSize: {width: window.innerWidth, height: window.innerHeight},
  windowVisible: document.visibilityState,
  secondaryOpen: false,
  playSound: true,
  debug: true
};

/* A mutaiton is a command to update the store in a very specific way.
 * A mutaiton has a type which is a string and optionally some
 * arguments.
 */
const mutations = {
  WINDOW_RESIZE (state) {
    state.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  WINDOW_VISIBLE (state) {
    state.windowVisible = document.visibilityState;
  },
  SECONDARY_OPEN (state) {
    state.secondaryOpen = true;
  },
  SECONDARY_CLOSE (state) {
    state.secondaryOpen = false;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
