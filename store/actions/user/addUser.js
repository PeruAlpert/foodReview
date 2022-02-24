import { REDUX_USER, } from '../../CONSTANTS';
//action to know this person enter before
export default data => async (dispatch, getState) => {
    dispatch({ type: REDUX_USER, value: data });
};