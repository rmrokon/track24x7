import axios from 'axios';
import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_FAILURE
} from './clientsActionTypes';

export const fetchClientsRequest = () => {
    return {
        type: FETCH_CLIENTS_REQUEST,
    };
};

const fetchClientsSuccess = clients => {
    return {
        type: FETCH_CLIENTS_SUCCESS,
        payload: clients
    };
};

const fetchClientsFailure = error => {
    return {
        type: FETCH_CLIENTS_FAILURE,
        payload: error
    }
}

export const fetchClients = () => {
    return (dispatch) => {
        dispatch(fetchClientsRequest);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const clients = res.data;
                dispatch(fetchClientsSuccess(clients));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchClientsFailure(errorMsg));
            })
    }
}