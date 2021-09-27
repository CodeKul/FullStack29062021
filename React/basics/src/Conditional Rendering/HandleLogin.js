import React, { Component } from 'react'
import Login from './Login'
import Logout from './Logout'

export class Authentication extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }

    login=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }

    logout=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    
    render() {
        return (
            <div>
                {this.state.isLoggedIn ?<Logout clickHandler={logout}/>:<Login clickHandler={login}/>}
                
            </div>
        )
    }
}

export default Authentication

