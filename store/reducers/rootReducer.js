import {
  // third steps uniqe var
  REDUX_LOGIN,
  REDUX_lOGOUT,
  REDUX_USER,
  REDUX_POST,
  REDUX_DELETEPOST,
} from '../CONSTANTS';

const initState = {
  // first steps to store data
  login: false,
  logOut: false,
  user: [],
  post: [],
  deletePost: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    // fourth steps action
    case REDUX_LOGIN:
      return { ...state, login: action.value };
    case REDUX_lOGOUT:
      return { ...state, logOut: action.value };
    case REDUX_USER:
      return { ...state, user: action.value };
    case REDUX_POST:
      return { ...state, post: action.value };
    case REDUX_DELETEPOST:
      return { ...state, deletePost: action.value };

    default:
      return { ...state };
  }
};
