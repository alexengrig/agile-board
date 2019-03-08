export function getBoards(state) {
  return state.boards;
}

export function getBoardsList(state) {
  return Object.values(getBoards(state));
}
