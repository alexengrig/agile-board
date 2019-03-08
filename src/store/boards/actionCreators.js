import { FETCHED } from './actionTypes';

export function fetch(payload) {
  return { type: FETCHED, payload };
}
