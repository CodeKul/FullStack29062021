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
    return comment
}

function sendComment(){
    // post(url,body,{headers})
    let commentData = getUserInfo()
    let p = axios.post('https://jsonplaceholder.typicode.com/posts',commentData,{'Content-type':'application/json'})
    console.log(p)
    p.then((res)=>{
        console.log(res)
    })
}

function getComments(){
    let x =axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(x)

    x.then((response)=>{
       let result = response.data
        return result
    })
    .then((result)=>{
        console.log(result)
        let tbl = `<table>
                    <tr>
                        <th>Userid</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>`
        result.map((item)=>{
            tbl +=`<tr>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>`
        })
        document.getElementById('comments').innerHTML=tbl
    })
    

   
}