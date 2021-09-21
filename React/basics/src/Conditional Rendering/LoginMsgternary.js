import React from 'react'

function LoginMsgternary(props) {
    
    return (
        <div>
            {/* {props.loginstatus===true ? <h2>Welcome</h2>:<h2>Please try again later</h2>} */}
             {props.loginstatus ===true && <h2>Welcome user</h2>}
        </div>
    )
}

export default LoginMsgternary
