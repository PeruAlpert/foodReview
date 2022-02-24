import { REDUX_LOGIN, } from '../../CONSTANTS';
//action to remove this person 
export default value => async (dispatch, getState) => {
    dispatch({ type: REDUX_LOGIN, value: false });
};