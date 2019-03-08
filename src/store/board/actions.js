import { fetch } from './actionCreators';
import { boardService } from '../../services';

export function fetchBoardById(boardId) {
  const board = boardService.getBoardById(boardId);
  return fetch(board);
}
