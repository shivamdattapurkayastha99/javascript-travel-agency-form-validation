console.log("this is index.js")
const name=document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
let validEmail=false
let validPhone=false
let validUser=false
name.addEventListener('blur',()=>{
    console.log("name is blurred")
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value
    if (regex.test(str)) {
        console.log("matched")
        name.classList.remove('is-invalid')
    }
    else{
        console.log("no match")
        
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blurred")
    let regex=/(_\-\.0-9a-zA-Z)@(_\-\.0-9a-zA-Z)\.(a-zA-Z)$/;
    let str=email.value
    if (regex.test(str)) {
        console.log("matched")
        email.classList.remove('is-invalid')
    }
    else{
        console.log("no match")
        
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred")
    let regex=/^([0-9]){2,10}$/;
    let str=phone.value
    if (regex.test(str)) {
        console.log("matched")
        phone.classList.remove('is-invalid')
    }
    else{
        console.log("no match")
        
    }
})
let submit=document.getElementById('submit')
submit.addEventListener('click',()=>{
    console.log("submit")
    if (validEmail&&validUser&&validPhone) {
        console.log("all valid");
        success=document.getElementById("success")
    success.classList.add('show')
    }
    else{
        console.log("any one valid");
        failure=document.getElementById("failure")
    failure.classList.add('show')
    }
    success=document.getElementById("success")
    success.classList.add('show')
})