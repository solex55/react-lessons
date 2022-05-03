import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'

function Callback() {
    const [task, setTask] = useState(0.0)
    const [income, setIncome] = useState(1000)

    const TaskIncrease = useCallback(() => {
        setTask( PrevTask => PrevTask + 0.1)
    }, [])
    const Wallet = useCallback(() => {
        setIncome( PrevIncome => PrevIncome + 1000)
    }, [income])

    return (
        <div>
            <div>Reward</div>
            <Count text="Task" earn={task}/> 
            <Button handleClick={TaskIncrease}>{`Increase ${task} done`}</Button>
            <Count text="Income" earn={income}/> 
            <Button handleClick={Wallet} />
        </div>
    )
}

export default Callback
