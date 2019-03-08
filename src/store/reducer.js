import { combineReducers } from 'redux';
import board from './board';
import boards from './boards';
import team from './team';
import teams from './teams';

export default combineReducers({
  board,
  boards,
  team,
  teams
});
