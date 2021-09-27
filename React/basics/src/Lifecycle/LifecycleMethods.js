import React, { Component } from 'react'

export class LifecycleMethods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("Did mount")
    }


    shouldComponentUpdate(){
        return false
    }

    componentDidUpdate(){
        console.log("Update")
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default LifecycleMethods
