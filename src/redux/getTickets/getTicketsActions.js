import axios from 'axios';
import {
    FETCH_TICKETS_REQ,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE
} from './getTicketsActionTypes';


export const fetchAllTickets = () => {
    return {
        type: FETCH_TICKETS_REQ
    }
}

const fetchAllTicketsSuccess = (tickets) => {
    return {
        type: FETCH_TICKETS_SUCCESS,
        payload: tickets
    }
}
const fetchAllTicketsFailure = (error) => {
    return {
        type: FETCH_TICKETS_FAILURE,
        payload: error
    }
}

export const fetchTickets = () => {
    return (dispatch) => {
        dispatch(fetchAllTickets);
        axios.get("https://trackit24x7.herokuapp.com/getAllTickets")
            .then(res => {
                dispatch(fetchAllTicketsSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchAllTicketsFailure(error.message))
            })
    }
}