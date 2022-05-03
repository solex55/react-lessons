import React from 'react'

function Button({ handleClick}) {
    return (
        <div>
            <button onClick={handleClick}> 
            Increase Wallet
            </button>
        </div>
    )
}

export default Button
