import React, { Component } from 'react'
import RenderMsg from './RenderMsg'
//rce -class component
//rfce - function component
//rconst - constructor
class DisplayMessage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello",
             count:0,
             cities:["pune","mumbai","nagpur"]
        }
        
    }
    
    //state - object
    //setState - manipulate/change the state

    changeMessage=()=>{
         this.setState({message:"Hello World"})
        // this.state.message = "Hello World"
        // console.log(this.state.message)
    }

    increment=()=>{
        this.setState({count:this.state.count+1,
            cities:[...this.state.cities,"Bangalore"]})

            //this.setState({count:this.state.count+1,
            //cities:["pune","mumbai","nagpur","Bangalore"]})
        
    }

    render() {
        const {message,count,cities}=this.state
        return (
            <div>
                <h1>State in React</h1>
                {console.log(this.state)}
               <h4>{message}</h4> 

                <button onClick={this.changeMessage}>Change Message</button>

                <h3>{count}</h3>
                <button onClick={this.increment}>Increment Count</button>

                {cities.map((city)=>(
                    <li>{city}</li>
                ))}
                <RenderMsg msg={this.state.message} cities={this.state.cities}/>
            </div>
        )
    }
}

export default DisplayMessage

