import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Create an object to hold the initial state when
// the app starts up
const state = {
  device: {
    browser: '',
    type: ''
  },
  size: {
    width: '',
    height: '',
    layout: 'mobile'
  },
  secondary: {
    status: 'closed'
  },
  theme: 'light',
  pageVisible: true,
  playSound: true
};

const mutations = {
  WINDOW_RESIZE (state, layout) {
    state.size = layout;
  },
  WINDOW_VISIBLE (state, visible) {
    state.pageVisible = visible;
  },
  DEVICE (state, device) {
    state.device = device;
  },
  SECONDARY_OPEN (state) {
    state.secondary.status = 'open';
  },
  SECONDARY_CLOSE (state) {
    state.secondary.status = 'closed';
  },
  THEME (state, theme) {
    state.theme = theme;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
