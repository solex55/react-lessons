import React, {useState} from 'react'

function FunctionalHook() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(['nameless'])

    const NameChange = () => {
        const newName = ['forth', 'jules', 'sammy']
        const indexed = Math.floor(Math.random() * 3)
        console.log(indexed)
        setName(newName[indexed])
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count  </button> {count}
            <button onClick={() => setCount(count - 1)}> Reduce  </button><br/>
            { name }<button onClick={NameChange}> Change Name  </button>

        </div>
    )
}

export default FunctionalHook
