import { CounterReducer } from './CounterReducer'
import { AddTextReducer } from './AddTextReducer'
import { combineReducers } from 'redux';
import { SET_APP_TYPE } from '../actions/types';

const appTypeReducer = (state = '1', action) => {
  if (action.type === SET_APP_TYPE) {
    return action.payload.appType;
  }
  return state;
}

const reducer1 = () => {
  return 0;
}

const reducer2 = () => {
  return 1;
}

export default combineReducers({
  appType: appTypeReducer,
  counter: CounterReducer,
  text: AddTextReducer,
})
