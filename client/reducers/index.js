import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import access from './access';

const rootReducer = combineReducers({
  access,
  routing: routerReducer
});

export default rootReducer;