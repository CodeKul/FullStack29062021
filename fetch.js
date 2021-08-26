function getUserInfo(){
    let uid = document.getElementById('userid').value
    console.log(uid)
    let title = document.getElementById('title').value
    console.log(title)
    let body = document.getElementById('content').value
    console.log(body)
    let comment ={
        id:uid,
        title:title,
        body:body
    }
    console.log(comment)
    console.log(JSON.stringify(comment))
    return JSON.stringify(comment)
}
//JSON.stringify() - js to json
//.json() - json to js
function sendComment(){
    let newComment = getUserInfo()
    console.log(newComment)
    //fetch(url,{method,body,headers})
    let p=fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method:'POST',
        body:newComment,
        headers:{
            'Content-type':'application/json'
        }
    })
p.then((response)=>{
    console.log(response.json())
})

    console.log(p)
}

function getComments(){
    let y=fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    })
    y.then((res)=>{
        // console.log(res.json())
        let result= res.json()
        return result
    })
    .then((result)=>{
        let cInfo=`<table id="tb">
        <tr>
           <th>User Id</th>
           <th>Title</th>
           <th>Body</th>
           <th>Id</th>
        </tr>`
        result.map((el)=>{
            cInfo= cInfo+`<tr>
                <td>${el.userId}</td>
                <td>${el.title}</td>
                <td>${el.body}</td>
                <td>${el.id}</td>
            </tr>`
            
        })
        console.log(cInfo)
        document.getElementById('comments').innerHTML=cInfo
    })
    .catch((errMsg)=>{
        console.log(errMsg)
    })
    
}
