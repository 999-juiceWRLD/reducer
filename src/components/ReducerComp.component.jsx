import { INITIAL_STATE, requestReducer } from "../reducer";
import { ACTION_TYPES } from "../reducerStates";
import { useReducer } from "react";
import axios from "axios";

export const ReducerComp = () => {
    
    const [state, dispatch] = useReducer(requestReducer, INITIAL_STATE)
    const makeRequest = () => {
        dispatch({ type: ACTION_TYPES.FETCH_START })
        axios.get('https://api.kanye.rest/')
            .then(axiosResponse => { 
                if (axiosResponse.status === 200) {
                    const data = axiosResponse.data
                    dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data })
                    return axiosResponse.data
                } else {
                    dispatch({ type: ACTION_TYPES.FETCH_ERROR })
                }
            })
            .then(data => { console.log(data) })
            .catch(() => dispatch({ type: ACTION_TYPES.FETCH_ERROR }))
    }

    return (
        <div>
            <p> { state.post?.quote } </p>
            <button onClick={makeRequest}>
                { state.loading ? 'loading...' : 'Fetch the quote' }
            </button>
            <span> { state.error && 'Something went wrong!' } </span>
        </div>
    )
}
