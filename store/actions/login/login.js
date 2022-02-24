import { API, REDUX_LOGIN, REDUX_USER } from '../../CONSTANTS';
const axios = require('axios');

export default ({ email, password }, callback) =>
  async (dispatch, getState) => {
    dispatch({ type: REDUX_LOGIN, value: true });
    // console.log('hello');
    dispatch({
      type: REDUX_USER,
      value: [
        {
          id: 12,
          user_id: 3481,
          name: 'peru',
          age: 21,
          title:
            'Decor suscipit eum doloribus eaque adsum claro caries dolorem.',
          body: 'Deserunt tergo quo. Usitas aspicio arbor. Quibusdam ratione demonstro. ',
        },
      ],
    });

    // check user login

    // axios({
    //   method: 'GET',
    //   url: `${API}/users/100`,
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     //action to store in redux
    //     dispatch({ type: REDUX_USER, value: response.data });
    //     //action to know this person enter before
    //     dispatch({ type: REDUX_LOGIN, value: true });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     callback('invalid email or password');
    //   });
  };
