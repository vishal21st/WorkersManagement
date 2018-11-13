import actionTypes from '../consts/actionTypes';

import data from './data';

const workersActions = dispatch => ({
  initializeWorkers: (payload) => {
    const workers = data.workers.filter((worker) => {return (worker.manager_id == payload.id)})
    
    dispatch({ 
      type: actionTypes.workers.INITIALIZE_WORKERS, 
      payload: workers 
    });
  }
});

export default workersActions;
