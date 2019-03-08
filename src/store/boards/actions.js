import { fetch } from './actionCreators';
import { boardService } from '../../services';

export function fetchBoards() {
  const boards = boardService.getBoards();
  return fetch(boards);
}
