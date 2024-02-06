const form = document.getElementById('question-form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'campo obrigatório');
    }
    else if(!isName(usernameValue)){
        setErrorFor(username, 'informe nome e sobrenome');
    }else{
        setSuccessFor(username);
    }
    
    
    if(emailValue === ''){
        setErrorFor(email, 'campo obrigatório');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'informe um e-mail válido');
    }else{
        setSuccessFor(email);
    }
    
    
    if(phoneValue === ''){
        setErrorFor(phone, 'campo obrigatório');
    }
    else if(!isPhone(phoneValue)){
        setErrorFor(phone, 'informe um número de telefone válido com DDD');
    }else{
        setSuccessFor(phone);
    }
    
    if(messageValue === ''){
        setErrorFor(message, 'campo obrigatório');
    }
    else{
        setSuccessFor(message);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isName(username){
    return /^[A-Za-z]*\s{1}[A-Za-z]*$/.test(username);
}

function isEmail(email){
    return /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(email);
}

function isPhone(phone){
    
    return /^[0-9]{11}$/.test(phone);    
}
