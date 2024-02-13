let form = document.querySelector('#form');
let Name = document.querySelector('#Name')
let company_name = document.querySelector('#Company_name')
let email = document.querySelector('#Email')
let phone = document.querySelector('#Phone')
let message = document.querySelector('#txtArea');
let Submit_btn = document.getElementById('Submit_btn')

// Submit_btn.addEventListener('click',function (e) {
//     e.preventDefault()

//     let name_value =
// })
// const myFunction = (e)=> {
//     e.preventDefault();
//     let name_value = Name.value;
//     let company_name_value = company_name.value;
//     let email_value = email.value;
//     let phone_value = phone.value;
//     let message_value = message.value;

//     localStorage.setItem('name',name_value)
//     localStorage.setItem('company_name',company_name_value)
//     localStorage.setItem('email',email_value)
//     localStorage.setItem('phone',phone_value)
//     localStorage.setItem('message',message_value)

//     window.location.href = "FormData.html"; 
// }


Submit_btn.addEventListener('click',function (e) {
    e.preventDefault()
    let name_value = Name.value;
    let company_name_value = company_name.value;
    let email_value = email.value;
    let phone_value = phone.value;
    let message_value = message.value;
    
    localStorage.setItem('name',name_value)
    localStorage.setItem('company_name',company_name_value)
    localStorage.setItem('email',email_value)
    localStorage.setItem('phone',phone_value)
    localStorage.setItem('message',message_value)

    window.location.href = "FormData.html";
})


const New_name = document.getElementById('New_name')
const Nice = localStorage.getItem('name')
New_name.textContent = Nice


   









       








