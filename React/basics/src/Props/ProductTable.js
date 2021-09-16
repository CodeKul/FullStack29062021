import React from 'react'

function ProductTable(props) {
    console.log(props)
    const {productList}=props //{producList:[{},{},{}] }

    let student={
        name:"sucheta",
        city:"pune"
    }
    // let studentName = student.name
    // let studentCity = student.city
    // console.log(studentName)

    const{city,name}=student
    console.log(name + ' ' + city)

    let arr=["pune","mumbai","nagpur"]
    console.log(arr[1])
    let secondElement = arr[1]

    const[a,b,c]=arr
    

    console.log(productList)
    return (
        <div>
            {b}
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Product Qty</th>
                    <th>Product Price</th>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
    )
}

export default ProductTable
