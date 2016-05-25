/*
 * The action is a function which determines what updates must be applied on a store.
 * The action cannot update the state directly. Instead it has to dispatch a mutation.
 */
import MobileDetect from 'mobile-detect';
import Browser from 'detect-browser';

export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1);
};

export const windowResize = function ({ dispatch, state }) {
  let size = {
    width: window.innerWidth,
    height: window.innerHeight,
    layout: window.innerWidth < 770 ? 'mobile' : 'desktop'
  };
  dispatch('WINDOW_RESIZE', size);
};

export const windowVisible = function ({ dispatch, state }) {
  let visible = document.visibilityState;
  dispatch('WINDOW_VISIBLE', visible);
};

export const deviceDetect = function ({ dispatch, state }) {
  function getDeviceType () {
    var useragent = window.navigator.userAgent;
    var mobileDetect = new MobileDetect(useragent);
    if (mobileDetect.tablet()) {
      return 'tablet';
    } else if (mobileDetect.mobile()) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }

  let device = {
    browser: Browser.name,
    type: getDeviceType()
  };
  dispatch('DEVICE', device);
};

export const secondaryOpen = function ({ dispatch, state }) {
  dispatch('SECONDARY_OPEN');
  dispatch('THEME', 'dark');
};

export const secondaryClose = function ({ dispatch, state }) {
  dispatch('SECONDARY_CLOSE');
  dispatch('THEME', 'light');
};
