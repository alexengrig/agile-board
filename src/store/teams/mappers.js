import { getTeams } from './selectors';
import { fetchTeams } from './actions';

export const mapStateToProps = state => ({
  teams: getTeams(state)
});
export const mapDispatchToProps = dispatch => ({
  onFetchTeams: () => dispatch(fetchTeams())
});
