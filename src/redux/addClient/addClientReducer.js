import {
    ADD_NEW_CLIENT_REQ,
    ADD_NEW_CLIENT_SUCCESS,
    ADD_NEW_CLIENT_FAILURE
} from './addClientActionTypes';

const initialState = {
    adding: false,
    status: null,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CLIENT_REQ:
            return {
                ...state,
                adding: true
            }
        case ADD_NEW_CLIENT_SUCCESS:
            return {
                adding: false,
                status: action.payload,
                error: ''
            }
        case ADD_NEW_CLIENT_FAILURE:
            return {
                adding: false,
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;