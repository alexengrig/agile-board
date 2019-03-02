import { createStore } from 'redux';
import reducer, {
  mapBoardDispatchToProps, mapBoardStateToProps,
  mapBoardsStateToProps, mapBoardsDispatchToProps
} from './reducer';

const configureStore = () => {
  const store = createStore(reducer);

  return store;
};

export default configureStore;

export {
  mapBoardStateToProps, mapBoardDispatchToProps,
  mapBoardsStateToProps, mapBoardsDispatchToProps
};
