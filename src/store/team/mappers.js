import { getTeamColor, getTeamId, getTeamName } from './selectors';
import { fetchTeamById } from './actions';

export const mapStateToProps = state => ({
  id: getTeamId(state),
  name: getTeamName(state),
  color: getTeamColor(state)
});
export const mapDispatchToProps = dispatch => ({
  onFetchTeam: teamId => dispatch(fetchTeamById(teamId))
});
