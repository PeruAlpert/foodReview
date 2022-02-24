import { REDUX_POST } from '../../CONSTANTS';
//action to delete on starage on phone
export default (id, comment) => async (dispatch, getState) => {
  let oldArray = [...getState().post];
  //   console.log('after update: ', oldArray);
  let objIndex = oldArray.findIndex((x) => x.id == id);
  //   console.log('after update: ', oldArray[objIndex]);
  oldArray[objIndex].body = comment;
  // console.log('after update: ', oldArray[objIndex]);

  dispatch({
    type: REDUX_POST,
    value: [...oldArray],
  });
};
