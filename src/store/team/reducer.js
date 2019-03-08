import { FETCHED } from './actionTypes';

const initialState = {};

export default function reduce(state = initialState, action = {}) {
  if (action.type === FETCHED) {
    return action.payload;
  } else {
    return state;
  }
}
