import * as paths from "../constants/paths";
import Main from "../layouts/Main";
import Board from "../layouts/Board";

const routes = [
  {
    path: paths.board,
    exact: true,
    component: Board
  },
  {
    path: paths.root,
    component: Main
  }
];

export default routes;
