import { combineReducers } from 'redux';

import workers from './workers';
import admin from './admin';

export default combineReducers({
  workers,
  admin,
});
