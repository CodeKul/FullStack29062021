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
