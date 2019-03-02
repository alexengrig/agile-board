import { combineReducers } from 'redux';

// boards stub
const boards = {
  '1': { id: 1, name: 'Stub board #1', color: 'red' },
  '2': { id: 2, name: 'Stub board #2', color: 'green' },
  '3': { id: 3, name: 'Stub board #3', color: 'blue' }
};

// board: Service stub
function getBoardFromAPI(boardId) {
  return boards[boardId];
}

// board: Action types
const BOARD_FETCHED = 'agile-board/board/BOARD_FETCHED';

// board: Initial state
const initialBoardState = {
  id: undefined,
  name: undefined,
  color: undefined
};

// board: Reducer
function boardReducer(state = initialBoardState, action = {}) {
  switch (action.type) {
    case BOARD_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

// board: Selectors
function getBoard(state) {
  return state.board;
}

function getBoardId(state) {
  return getBoard(state).id;
}

function getBoardName(state) {
  return getBoard(state).name;
}

function getBoardColor(state) {
  return getBoard(state).color;
}

// board: Action creators
function fetchBoard(payload) {
  return { type: BOARD_FETCHED, payload };
}

// board: Actions with side-effects
function fetchBoardById(boardId) {
  const board = getBoardFromAPI(boardId);
  return fetchBoard(board);
}

// board: Mappers
export const mapBoardStateToProps = state => ({
  id: getBoardId(state),
  name: getBoardName(state),
  color: getBoardColor(state)
});
export const mapBoardDispatchToProps = dispatch => ({
  onFetchBoard: boardId => dispatch(fetchBoardById(boardId))
});

// boards: Service stub
function getBoardsByAPI() {
  return Object.values(boards);
}

// boards: Actions
const BOARDS_FETCHED = 'agile-board/boards/BOARDS_FETCHED';

// boards: Initial state
const initialBoardsState = {};

// boards: Reducer
function boardsReducer(state = initialBoardsState, action = {}) {
  switch (action.type) {
    case BOARDS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

// boards: Selectors
function getBoards(state) {
  return state.boards;
}

function getBoardsList(state) {
  return Object.values(getBoards(state));
}

// boards: Action creators
function fetchBoards(payload) {
  return { type: BOARDS_FETCHED, payload };
}

// boards: actions with side-effects
function fetchBoardsFromServer() {
  const boards = getBoardsByAPI();
  return fetchBoards(boards);
}

// boards: Mappers
export const mapBoardsStateToProps = state => ({ boards: getBoardsList(state) });
export const mapBoardsDispatchToProps = dispatch => ({ onFetchBoards: () => dispatch(fetchBoardsFromServer()) });

// Root reducer
export default combineReducers({
  board: boardReducer,
  boards: boardsReducer
});
