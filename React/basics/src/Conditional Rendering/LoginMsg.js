import React from 'react'

function LoginMsg(props) {
    //{loginstatus:true}
    //&& - condn && ""
    //if..else , ternary ? :, &&,element
    let displaymsg;
    if(props.loginstatus === true){
        displaymsg= <h2>Welcome</h2>
    }else{
        displaymsg= <h2>Please Login</h2>
    }

    return(
        <h3>{displaymsg}</h3>
    )
}

export default LoginMsg
