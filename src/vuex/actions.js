/* The action is function which determines what updates must be
 * applied on a store. The action cannot update the state
 * directly. Instead it has to dispatch a mutation of type a given type
 */

export const windowResize = function ({ dispatch, state }) {
  dispatch('WINDOW_RESIZE');
};

export const windowVisible = function ({ dispatch, state }) {
  dispatch('WINDOW_VISIBLE');
};

export const setSecondaryState = function ({ dispatch, state }, open) {
  if (open) {
    dispatch('SECONDARY_OPEN');
  } else {
    dispatch('SECONDARY_CLOSE');
  }
};
