import React from 'react'

function RenderMsg(props) {
    console.log(props)
    return (
        <div>
            {props.cities}
        </div>
    )
}

export default RenderMsg
