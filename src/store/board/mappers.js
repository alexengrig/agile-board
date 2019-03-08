import { getBoardColor, getBoardId, getBoardName } from './selectors';
import { fetchBoardById } from './actions';

export const mapStateToProps = state => ({
  id: getBoardId(state),
  name: getBoardName(state),
  color: getBoardColor(state)
});
export const mapDispatchToProps = dispatch => ({
  onFetchBoard: boardId => dispatch(fetchBoardById(boardId))
});
