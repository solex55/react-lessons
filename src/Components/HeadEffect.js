import React, {useState, useEffect}  from 'react'

function HeadEffect() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)
    const [name, setName] = useState('')

    const HeaderCount = () => {
        setCount(PrevCount => PrevCount + 1)
    }

    //useEffect is used when you want a value/part to render based on a set second parameter
    useEffect(() => {
       document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input 
                type='text'
                value={name}
                placeholder='Stay idle'
                onChange={e => setName(e.target.value)}
            />
            <button onClick={HeaderCount}> Click {count} Times</button>
        </div>
    )
}

export default HeadEffect
