import { createStore } from 'redux';
import reducer from './reducer';

export default function configureStore() {
  return createStore(reducer);
}

export { mapStateToProps as mapBoardStateToProps, mapDispatchToProps as mapBoardDispatchToProps } from './board';
export { mapStateToProps as mapBoardsStateToProps, mapDispatchToProps as mapBoardsDispatchToProps } from './boards';
export { mapStateToProps as mapTeamStateToProps, mapDispatchToProps as mapTeamDispatchToProps } from './team';
export { mapStateToProps as mapTeamsStateToProps, mapDispatchToProps as mapTeamsDispatchToProps } from './teams';
