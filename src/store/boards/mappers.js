import { getBoardsList } from './selectors';
import { fetchBoards } from './actions';

export const mapStateToProps = state => ({ boards: getBoardsList(state) });
export const mapDispatchToProps = dispatch => ({ onFetchBoards: () => dispatch(fetchBoards()) });
