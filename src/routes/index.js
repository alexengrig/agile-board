import { paths } from '../constants';
import { Board, Main, Team } from '../layouts';

const routes = [
  {
    path: paths.board,
    exact: true,
    component: Board
  },
  {
    path: paths.team,
    exact: true,
    component: Team
  },
  {
    path: paths.root,
    component: Main
  }
];

export default routes;
