import actionTypes from '../consts/actionTypes';

import data from './data';

const adminActions = dispatch => ({
  login: (payload) => {
    dispatch({ type: actionTypes.admin.LOGGING });
    let self = this
    return new Promise (function(resolve, reject) {
      try {
        const { email, password } = payload
        if (["vishal@wakecap.com", "hassan@wakecap.com"].includes(email.toLowerCase()) && password == "password" ) {
          const admin = data.admins.filter((admin) =>  admin.email == email)[0]
          const workers = data.workers.filter((worker) =>  worker.manager_id == admin.id)
          dispatch({ type: actionTypes.admin.INITIALIZE_ADMIN, payload: admin });
          resolve({admin})
        } else {
          reject({error: "Email or Password is incorrect!"})
        }
      } catch(err) {
        reject({error: err})
      }
    })
  }
});

export default adminActions;
