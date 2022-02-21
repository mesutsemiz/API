window.onload=(()=>{
    setTimeout(fillFromInput, 1000);
})

const fillFromInput = () => {
    let email = document.getElementById("email").value="eve.holt@reqres.in"

    let password =document.getElementById("password").value = "pistol";

    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
}




//  XMLHTTPREQUEST before fetch and axios that use for API

// const apiRegister = () =>{
//     let email = localStorage.getItem("email")
//     let password = localStorage.getItem("password")
//     const bodyData = {
//         email : email,
//         password :password
//     }

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://reqres.in/api/register")

//     xhr.setRequestHeader("Content-Type", "application/json")

//     xhr.send(JSON.stringify(bodyData));
//     xhr.onload = function(){
//         let data = JSON.parse(xhr.responseText)
//         if(data.id != "0");
//         console.log(data)
//         localStorage.setItem("token", data.token)

//     }

// }
//  FETC()

const apiRegister = () =>{
    let email = localStorage.getItem("email").value;
    let password = localStorage.getItem("password").value;

    const bodyData = {
        email : email,
        password :password
    };

    fetch("https://reqres.in/api/register", {
        methd:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    })
    .then(response =>response.json())
    .then(data =>{
        if (data.id != "0"){
            console.log(data);
            alert("welcome"+email.split("@")[0])
        }
    })
    .catch((e)=>console.log(e))



}

