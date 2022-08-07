import { createStore } from 'redux';
import drawerReducer from './dashboardDrawer/drawerReducer';

const store = createStore(drawerReducer);

export default store;
