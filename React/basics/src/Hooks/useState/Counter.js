import React, { useState } from 'react'

function Counter() {
    //const count = useState("abc")  //returns an array of one var, one function
    const[ctr,setCount]=useState(0) //setState , setCounter

    let inc=()=>{
        setCount(ctr+1)
    }
    
    return (
        <div>
            <h3>{ctr}</h3>
            <button onClick={inc}>Increment</button>
        </div>
    )
}

export default Counter
