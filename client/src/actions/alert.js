import { SET_ALERT, REMOVE_ALERT } from './constants';
import { v4 as uuid } from 'uuid';

/* Can add dispatch for multiple actions to take place
because of thunk middleware */
export const setAlert = (msg, alertType, timeOut = 3000) => dispatch => {
  const id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
};
