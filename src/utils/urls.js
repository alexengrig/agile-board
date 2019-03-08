import { paths } from '../constants';

const getBoardUrlById = id => paths.board.replace(new RegExp(`${paths.boardId}`, 'g'), id);

const getTeamUrlById = id => paths.team.replace(new RegExp(`${paths.teamId}`, 'g'), id);

export default { getBoardUrlById, getTeamUrlById };
