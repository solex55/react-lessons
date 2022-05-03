import React, {useReducer} from 'react'

const initialState = 0
//to use action then you use switch
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    } 
}

function Reduce() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            
            Count : {state}
            <button onClick={() => dispatch('reset')}>Reset </button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>

        </div>
    )
}

export default Reduce
