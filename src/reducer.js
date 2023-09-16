import { ACTION_TYPES } from "./reducerStates";

export const INITIAL_STATE = {
    loading: false,
    post: {},
    error: false
}

export const requestReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_START:
            return {...state, loading: true}
        case ACTION_TYPES.FETCH_SUCCESS:
            return {error: false, loading: false, post: action.payload}
        case ACTION_TYPES.FETCH_ERROR:
            return {...state, error: true, loading: false, post: {}}    
        default:
            return state
    }
}
