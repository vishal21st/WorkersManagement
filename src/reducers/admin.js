import actionTypes from '../consts/actionTypes';
import createReducer from './createReducer';

const reducers = {};

const defaultState = {

};

reducers[actionTypes.admin.INITIALIZE_ADMIN] = (state, payload) => {
  return {
    ...state,
    ...payload
  }
};


export default createReducer(reducers, defaultState);
