import * as paths from '../constants/paths';
import Main from '../layouts/Main';
import Board from '../layouts/Board';

const routers = [
  {
    pathname: paths.board,
    component: Board
  },
  {
    pathname: paths.root,
    component: Main
  }
];

export default routers;
