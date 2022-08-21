import { combineReducers } from 'redux';
import drawerReducer from './dashboardDrawer/drawerReducer';

const rootReducer = combineReducers({
    drawer: drawerReducer
});

export default rootReducer;