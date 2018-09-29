import { START_LOADING, STOP_LOADING, ERROR_OCCURED } from '../actions/loading'
const defaultState = {
    loading: false,
    hasError: false,
    error: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                loading: true,
                hasError: false,
                error: null
            }
        case STOP_LOADING:
            return {
                loading: false,
                hasError: false,
                error: null
            }
        case ERROR_OCCURED:
            return {
                loading: false,
                hasError: action.error,
                error: action.error
            }
        default:
            return state;
    }
}
