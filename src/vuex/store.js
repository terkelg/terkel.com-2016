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
    status: 'closed'
  },
  cases: [
    {
      id: 'radio24syv',
      title: 'Radio24syv',
      thumbnail: 'http://placekitten.com/200/400'
    },
    {
      id: 'skagen',
      title: 'Sakgen Museeum',
      thumbnail: 'http://placekitten.com/200/400'
    },
    {
      id: 'radio24syv',
      title: 'Radio24syv',
      thumbnail: 'http://placekitten.com/200/400'
    },
    {
      id: 'radio24syv',
      title: 'Radio24syv',
      thumbnail: 'http://placekitten.com/200/400'
    },
    {
      id: 'radio24syv',
      title: 'Radio24syv',
      thumbnail: 'http://placekitten.com/200/400'
    },
    {
      id: 'radio24syv',
      title: 'Radio24syv',
      thumbnail: 'http://placekitten.com/200/400'
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
  }
};

export default new Vuex.Store({
  state,
  mutations
});
