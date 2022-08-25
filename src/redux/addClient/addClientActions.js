import axios from 'axios';
import {
    ADD_NEW_CLIENT_REQ,
    ADD_NEW_CLIENT_SUCCESS,
    ADD_NEW_CLIENT_FAILURE
} from './addClientActionTypes';

export const addNewClientReq = () => {
    return {
        type: ADD_NEW_CLIENT_REQ
    };
};

const addNewClientSuccess = (status) => {
    return {
        type: ADD_NEW_CLIENT_SUCCESS,
        payload: status
    };
};

const addNewClientFailure = (error) => {
    return {
        type: ADD_NEW_CLIENT_FAILURE,
        payload: error
    }
}

export const addNewClient = (client) => {
    return (dispatch) => {
        dispatch(addNewClientReq)
        axios.post("http://localhost:5000/addClient", client)
            .then(res => {
                dispatch(addNewClientSuccess(res.status))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(addNewClientFailure(errorMsg));
            })
    }
}