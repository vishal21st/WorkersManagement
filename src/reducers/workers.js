import actionTypes from '../consts/actionTypes';
import createReducer from './createReducer';

const reducers = {};

const defaultState = {

};

reducers[actionTypes.workers.INITIALIZE_WORKERS] = (state, workers) => {
  return {
    ...state,
    workers
  }
  
};


export default createReducer(reducers, defaultState);
