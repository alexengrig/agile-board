import { createStore } from 'redux';
import reducer, { mapBoardDispatchToProps, mapBoardStateToProps } from './reducer';

const configureStore = () => {
  const store = createStore(reducer);

  return store;
};

export default configureStore;

export { mapBoardStateToProps, mapBoardDispatchToProps };
