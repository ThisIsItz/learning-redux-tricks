import { INCREMENT, DECREMENT, INCREMENT_BY_TWO } from '../actions/types';

export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_BY_TWO:
      return state + 2;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}