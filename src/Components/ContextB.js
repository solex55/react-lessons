import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

function ContextB() {

    const user = useContext(UserContext)
    const job = useContext(ChannelContext)

    return (
        <div>
            {user} - {job}
        </div>
    )
}

export default ContextB
