import React, {useState} from 'react';

function PrevState() {
    const intialValue = 0
    const [count, setCount] = useState(intialValue);

    return (
        <div>
            Count {count} 
            <button onClick={() => setCount(intialValue)}> Reset</button>
            <button onClick={() => setCount(PrevCount => PrevCount + 1)}> Increase</button>
            <button onClick={() => setCount(PrevCount => PrevCount - 1)}> Decrease  </button>
        </div>
    )
}

export default PrevState
