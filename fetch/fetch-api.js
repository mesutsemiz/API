fetch("fetch/setting.json").then(
    response =>response.json()
).then(responseJson =>{
    console.log(responseJson)
})

// fetch("https://jsonplaceholder.typicode.com/posts").then(
//     response=>response.json()
// ).then(responseJson =>{
//     console.log(responseJson[1])
// })


let userListDom = document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response=>response.json()
).then(responseJson =>{
    responseJson.forEach(item =>{
        let LiDOM= document.createElement("li");
        LiDOM.innerHTML = item.title
        userListDom.appendChild(LiDOM);
    })
})