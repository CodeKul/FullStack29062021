import React from 'react'
//Props - pass info from one component to another
function PropsDemo(props) {
    console.log(props)//{ user:"abc"}
    return (
        <div>
         <i>PropsDemo</i>
         <h2>Username is {props.user} and he is {props.isActive}</h2>
        </div>
    )
}

export default PropsDemo
