export function getBoard(state) {
  return state.board;
}

export function getBoardId(state) {
  return getBoard(state).id;
}

export function getBoardName(state) {
  return getBoard(state).name;
}

export function getBoardColor(state) {
  return getBoard(state).color;
}
