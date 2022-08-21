import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import drawerReducer from './dashboardDrawer/drawerReducer';

const store = createStore(rootReducer);

export default store;
