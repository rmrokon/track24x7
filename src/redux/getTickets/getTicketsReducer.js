import {
    FETCH_TICKETS_REQ,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE
} from './getTicketsActionTypes';


const initialState = {
    loading: false,
    tickets: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_TICKETS_SUCCESS:
            return {
                loading: false,
                tickets: action.payload,
                error: ''
            }
        case FETCH_TICKETS_FAILURE:
            return {
                loading: false,
                tickets: [],
                error: action.payload
            }

        default: return state;
    }
}

export default reducer;