import { combineReducers } from 'redux';
import drawerReducer from './dashboardDrawer/drawerReducer';
import clientsReducer from './clients/clientsReducer';
import ticketReducer from './ticket/ticketReducer';
import getTicketReducer from './getTickets/getTicketsReducer';
import addClientReducer from './addClient/addClientReducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    clients: clientsReducer,
    createTicket: ticketReducer,
    tickets: getTicketReducer,
    addClient: addClientReducer
});

export default rootReducer;