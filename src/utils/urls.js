import { paths } from '../constants';

export const getBoardUrlById = id => paths.board.replace(new RegExp(`${paths.boardId}`, 'g'), id);

export const getTeamUrlById = id => paths.team.replace(new RegExp(`${paths.teamId}`, 'g'), id);


export const getParamFromSearch = (search, param) => new URLSearchParams(search).get(param);
