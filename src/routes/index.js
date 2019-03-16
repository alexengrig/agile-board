import admin from './admin';
import main from './main';

const routes = [admin, main];

export default routes;

export { admin, main };
export { subroutes as adminRoutes } from './admin';
export { subroutes as mainRoutes } from './main';
