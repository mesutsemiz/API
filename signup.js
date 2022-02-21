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



// //  FETC()

// const apiRegister = () =>{
//     let email = document.getElementById("email").value;
//     let password =document.getElementById("password").value;

//     const bodyData = {
//         email : email,
//         password :password
//     };
//     console.log(bodyData)
//     console.log(JSON.stringify(bodyData))

//     fetch("https://reqres.in/api/register", {
//         methd:"POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(bodyData)
//     })
//     .then(response =>response.json())
//     .then(data =>{
//         if (data.id != "0"){
//             console.log(data);
//             alert("welcome"+email.split("@")[0]);
//             sessionStorage.setItem("token",data.token)
//         }
//     })
//     .catch((e)=>console.log(e))



// }





//  Axios()

const apiRegister = async () =>{
    let email = document.getElementById("email").value;
    let password =document.getElementById("password").value;

    const response = await axios({
        
        url : 'https://reqres.in/api/register',
        method:'post',
        data:{
            email: email,
            password: password
        }

    });

    if(response.data.id != "0"){
        console.log(response.data);
        window.location.href ="userList.html";
    }
}