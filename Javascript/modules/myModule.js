//Modules-import and export 
//1)named exports
//2)default exports

//named exports
 let myName="XYZ"

 function getName(){
   return myName
}

 function setName(namestr){
    
    myName=namestr
    
}

export {myName,getName,setName}

