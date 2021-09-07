import {setName,getName} from './myModule.js'

let employee={
    id:1,
    name:"xyz",
    city:"pune",
    getEmpInfo:()=>{
        return employee.name +" " + employee.city
    }
}

setName("Y")
let printname= getName()
console.log(printname)

export let skills=["Javascript","React"]
export default employee
