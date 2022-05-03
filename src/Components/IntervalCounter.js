import React, {useState, useEffect} from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 2)
    }

    useEffect(() => {
        const Interval = setInterval(tick, 1000)
        return () => {
            clearInterval(Interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCounter
