import { REDUX_POST } from '../../CONSTANTS';
//action to delete on starage on phone
export default () => async (dispatch, getState) => {
  dispatch({
    type: REDUX_POST,
    value: [],
  });
};
