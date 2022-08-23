import axios from 'axios';
import {
    CREATE_TICKET_REQ,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FALIURE
} from './ticketActionTypes';


export const createTicketReq = () => {
    return {
        type: CREATE_TICKET_REQ
    }
}

const createTicketSuccess = (status) => {
    return {
        type: CREATE_TICKET_SUCCESS,
        payload: status
    }
}
const createTicketFailure = (error) => {
    return {
        type: CREATE_TICKET_FALIURE,
        payload: error
    }
}

export const createTicket = (ticket) => {
    return (dispatch) => {
        dispatch(createTicketReq)
        axios.post("http://localhost:5000/createTicket", ticket)
            .then(res => {
                console.log(res);
                dispatch(createTicketSuccess(res.status))
            })
            .catch(error => {
                console.log(error)
                dispatch(createTicketFailure(error.message))
            })
    }
}