import Vuex from 'vuex';

Vue.use(Vuex);

// Create an object to hold the initial state when
// the app starts up
const state = {
  theme: 'dark',
  pageVisible: true,
  playSound: true,
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
    status: 'closed',
    currentCase: 0,
    loader: true,
    content: true
  },
  cases: [
    {
      id: 'radio24syv',
      title: 'Radio24syv'
    },
    {
      id: 'skagen',
      title: 'Skagen Museeum'
    },
    {
      id: 'arabien',
      title: 'Lykkelige Arabien'
    },
    {
      id: 'terriblechristmas',
      title: 'A Terrible Christmas'
    }
  ]
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
  },
  CURRENT_CASE (state, index) {
    state.secondary.currentCase = index;
  },
  SHOW_LOADER (state, show) {
    state.secondary.loader = show;
  },
  SHOW_CONTENT (state, show) {
    state.secondary.content = show;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
