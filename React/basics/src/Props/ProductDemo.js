import React from 'react'
import ProductTable from './ProductTable'

function ProductDemo() {
    let products=[
    {
        productName:"mouse",
        qty:4,
        price:100
    },
    {
        productName:"keyboard",
        qty:2,
        price:1400
    },
    {
        productName:"stylus",
        qty:2,
        price:9000
    }
]
    return (
        <div>
            <ProductTable productList={products}/>
        </div>
    )
}

export default ProductDemo
