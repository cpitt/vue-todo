// Each module should export it's main component/view as the default
export { default } from './Todos.vue';
// In addition each module should have named exports of routes and store
export { default as routes } from './routes';
export { default as store } from './store';
