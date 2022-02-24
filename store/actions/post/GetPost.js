import { API, REDUX_POST } from '../../CONSTANTS';
const axios = require('axios');
//action to store on starage on phone
export default () => async (dispatch, getState) => {
  let offset = 0;
  axios({
    method: 'GET',
    url: `${API}`,
  })
    .then((responseJson) => {
      //action to store in redux

      responseJson = responseJson.data.slice(
        offset * 10,
        (offset + 1) * 10 - 1
      );
      console.log('offset : ' + offset);
      offset = offset + 1;
      let oldArray = getState().post;
      oldArray = [...oldArray, ...responseJson];
      dispatch({
        type: REDUX_POST,
        value: oldArray,
      });
      // console.log('posts on redux', getState().post[0]);
    })

    .catch((error) => {
      console.log(error);
    });
};
