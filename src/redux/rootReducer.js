import { combineReducers } from 'redux';
import drawerReducer from './dashboardDrawer/drawerReducer';
import clientsReducer from './clients/clientsReducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    clients: clientsReducer
});

export default rootReducer;