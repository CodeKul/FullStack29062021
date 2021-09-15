import React from 'react'
import TestChild from './TestChild'

//JSX
function Test() {
    let name = "Sucheta"
    let person = {
        name: "Java",
        age: 100
    }

    let info = (
        <div>
            <h1>Columns</h1>
            <strong>As you can see, the columns are in the same natural order, but the visual order has changed by using the order-* classes on the columns.</strong>
        </div>
    )

    function displayPerson() {
        return person.name
    }

    return (
        <div>
            <h1>Test Component</h1>
            <h3>{name}</h3>
            <p>{person.name}</p>
            <p>{person.age}</p>
            {info}

            <h3>{displayPerson()}</h3>
            <TestChild/>
        </div>
    )
}

export default Test


