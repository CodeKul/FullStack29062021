import React from 'react'

function Logout(props) {
    return (
        <div>
            <button onClick={props.clickHandler}>Logout</button>
        </div>
    )
}

export default Logout
