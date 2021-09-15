import React from 'react'

function TestChild() {
    let technologies=["Java","SpringBoot","React js","Javascript","Bootstrap","CSS","Tailwind"]
    return (
        <div>
            <h1>Test Child Component</h1>
            <ul>
            {
                technologies.map((i,id)=>(
                    <li>{i}</li>
                ))  
            }
            </ul>
        </div>
    )
}

export default TestChild
