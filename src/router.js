import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './components/LandingPage';
import Todos, { routes as todoRoutes } from './modules/Todos';
import StoreVisualizer, {
  routes as storeVisualizerRoutes,
} from './modules/StoreVisualizer';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: LandingPage,
      name: 'home',
    },
    {
      path: '/todos',
      component: Todos,
      children: todoRoutes,
    },
    {
      path: '/store',
      component: StoreVisualizer,
      children: storeVisualizerRoutes,
    },
  ],
});
export default router;
