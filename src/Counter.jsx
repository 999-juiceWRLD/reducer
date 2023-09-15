import { useReducer } from "react"

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count++ }
        case 'decrement':
            return { count: state.count-- }
        default:
            return state;
    }
}

export const Counter = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
        </div>
    )
}
