import { REDUX_POST } from '../../CONSTANTS';
//action to delete on starage on phone
export default (id) => async (dispatch, getState) => {
  let oldArray = getState().post;
  let newArray = oldArray.filter((item) => item.id !== id);

  dispatch({
    type: REDUX_POST,
    value: newArray,
  });
};
