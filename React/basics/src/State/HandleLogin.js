import React, { Component } from 'react'

export class HandleLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }

    login=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    
    render() {
        return (
            <div>

                <button onClick={this.login}>{this.state.isLoggedIn? "Logout":"Login"}</button>
                {this.state.isLoggedIn ? <h3>Welcome</h3>:<h3>Not Loggedin</h3>}
            </div>
        )
    }
}

export default HandleLogin
