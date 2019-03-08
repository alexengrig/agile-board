import { fetch } from './actionCreators';
import { teamService } from '../../services';

export const fetchTeams = () => {
  const teams = teamService.getTeams();
  return fetch(teams);
};
