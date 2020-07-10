import {
  INCREMENT,
  DECREMENT,
  TEXT,
  SET_APP_TYPE,
  INCREMENT_BY_TWO
} from './types';

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const incrementByTwo = () => {
  return {
    type: INCREMENT_BY_TWO
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const text = () => {
  return {
    type: TEXT
  }
}

export const setAppType = (appType) => {
  return {
    type: SET_APP_TYPE,
    payload: { appType }
  }
}

