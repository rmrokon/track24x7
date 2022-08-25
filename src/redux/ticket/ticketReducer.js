import {
    CREATE_TICKET_REQ,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FALIURE
} from './ticketActionTypes';

const initialState = {
    loading: false,
    status: null,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TICKET_REQ:
            return {
                ...state,
                loading: true,
            }
        case CREATE_TICKET_SUCCESS:
            return {
                loading: false,
                status: action.payload,
                error: ''
            }
        case CREATE_TICKET_FALIURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;