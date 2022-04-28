import { GET_SUPERHEROS_REQUESTED, GET_SUPERHEROS_SUCCESS, GET_SUPERHEROS_ERROR} from '../actions/superherosActions';

const initialState = {
    superheros: [],
    loading: false,
    error: null
}

export function superherosReducer(state = initialState, action) {

    switch (action.type) {
        case GET_SUPERHEROS_REQUESTED :
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_SUPERHEROS_SUCCESS :
            return {
                ...state,
                loading: false,
                superheros: action.payload.data
            };

        case GET_SUPERHEROS_ERROR :
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default: return state;
    }
}