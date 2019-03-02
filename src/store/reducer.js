import { combineReducers } from 'redux';

// Service stub
function getBoardById(boardId) {
  const boards = {
    '1': { id: 1, name: 'Stub board #1', color: 'red' },
    '2': { id: 2, name: 'Stub board #2', color: 'green' },
    '3': { id: 3, name: 'Stub board #3', color: 'blue' }
  };
  return boards[boardId];
}

// Action types
const BOARD_FETCHED = 'agile-board/board/BOARD_FETCHED';

// Initial state
const initialBoardState = {
  id: undefined,
  name: undefined,
  color: undefined
};

// Reducer
function boardReducer(state = initialBoardState, action = {}) {
  switch (action.type) {
    case BOARD_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

// Selectors
function getBoardState(state) {
  return state.board;
}

function getBoardId(state) {
  return getBoardState(state).id;
}

function getBoardName(state) {
  return getBoardState(state).name;
}

function getBoardColor(state) {
  return getBoardState(state).color;
}

// Action creators
function fetchBoard(payload) {
  return { type: BOARD_FETCHED, payload };
}

// Actions with side-effects
function fetchBoardById(boardId) {
  const board = getBoardById(boardId);
  return fetchBoard(board);
}

// Mappers
export const mapBoardStateToProps = state => ({
  id: getBoardId(state),
  name: getBoardName(state),
  color: getBoardColor(state)
});
export const mapBoardDispatchToProps = dispatch => ({
  onFetchBoard: boardId => dispatch(fetchBoardById(boardId))
});

// Root reducer
export default combineReducers({
  board: boardReducer
});
