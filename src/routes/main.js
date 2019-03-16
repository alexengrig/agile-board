import { paths } from '../constants';
import { Main } from '../layouts';
import { Board, Home, Team } from '../views';

export default {
  path: paths.root,
  component: Main
};

export const subroutes = [
  {
    path: paths.home,
    exact: true,
    component: Home
  },
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
  { redirect: true, to: paths.home }
];
