import { REDUX_POST } from '../../CONSTANTS';
//action to store on starage on phone
export default (newObj) => async (dispatch, getState) => {
  //   console.log(newObj);
  let oldArray = getState().post;
  oldArray = [newObj, ...oldArray];

  dispatch({
    type: REDUX_POST,
    value: oldArray,
  });
};
