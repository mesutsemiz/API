$(document).ready(function () {
    setTimeout(getUserList, 2000);
})



// const getUserList = () =>{
    

    

//     fetch("https://reqres.in/api/users?page=2", {
//         methd:"GET",
//     })
//     .then(response =>response.json())
//     .then(response =>{
//         if (response.data[0].id != "0"){
//             for(let i=0; i<response.data.length; i++){
//                 $("#tbodyUserList").append(`

//             <tr>
//                 <td>
//                 <img src="${response.data[i].avatar}"/>
//                 </td>
//                 <td>
//                 ${response.data[i].id}

//                 </td>
//                 <td>
//                 ${response.data[i].email}

//                 </td>
//                 <td>
                
//                 ${response.data[i].first_name}

//                 </td>
//                 <td>
//                 ${response.data[i].last_name}

//                 </td>
//             </tr>

                
                
//                 `)
//             }

//         }
//     })
//     .catch((e)=>console.log(e))



// }





// get Axios

const getUserList = async () =>{


    const response = await axios({
        
        url : 'https://reqres.in/api/users?page=1',
        method:'GET'
    });

    if(response.data.id != "0"){
                        for(let i=0; i<response.data.data.length; i++){
                            $("#tbodyUserList").append(`
            
                        <tr>
                            <td>
                            <img src="${response.data.data[i].avatar}"/>
                            </td>
                            <td>
                            ${response.data.data[i].id}
            
                            </td>
                            <td>
                            ${response.data.data[i].email}
            
                            </td>
                            <td>
                            
                            ${response.data.data[i].first_name}
            
                            </td>
                            <td>
                            ${response.data.data[i].last_name}
            
                            </td>
                        </tr>
            
                            
                            
                            `)
                        }
    }

}

