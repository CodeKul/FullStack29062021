import React from 'react'

function DisplayInfoConditionally() {
    let product=[
        {
            category:"mobile",
            brand:"Samsung",
            type:"Galaxy",
            list:[{
               name:"M01",
               price:40000
            },{
                name:"M02",
                price:30000
             }],
            


        },
        {
            category:"mobile",
            brand:"Samsung",
            type:"Note",
            list:[{
               name:"Note1",
               price:90000
            },{
                name:"Note2",
                price:360000
             }],
            
        },
        {
            category:"mobile",
            brand:"Samsung",
            type:"Grand",
            list:[],
            
        }
    ]

    let course =[
        {
        coursename:"Full Stack Java",
        duration:"4 months",
        courseList:["HTML","CSS","React","SpringBoot"],
        price:30000,

    },
    {
        coursename:"Java",
        duration:"1 months",
        courseList:[],
        price:10000,

    }
]
    return (
        <div>
            
        </div>
    )
}

export default DisplayInfoConditionally
