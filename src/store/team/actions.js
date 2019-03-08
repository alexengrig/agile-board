import { fetch } from './actionCreators';
import { teamService } from '../../services';

export const fetchTeamById = (teamId) => {
  const team = teamService.getTeamById(teamId);
  return fetch(team);
};
