import { REDUX_USER, REDUX_notification_token } from "../../CONSTANTS";
//action to know this person enter before
export default (notification_token) => async (dispatch, getState) => {
  dispatch({ type: REDUX_notification_token, value: notification_token });
};
