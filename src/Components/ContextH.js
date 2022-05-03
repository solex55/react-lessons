import React, { useContext } from 'react'
import { CountContext } from '../App'

function ContextH() {
    const countContext = useContext(CountContext)

    return (
        <div>
            Context H { countContext.contextCounter}
            <button onClick={() => countContext.dispatchCounter('reset')}>Reset </button>
            <button onClick={() => countContext.dispatchCounter('increment')}>Increment</button>
            <button onClick={() => countContext.dispatchCounter("decrement")}>Decrement</button>
        </div>
    )
}

export default ContextH
