'use strict';
let post='';
let passwd='';
const email =document.querySelector('[name=email]');
const subm=document.querySelector('[name=button]');

console.log(email);
email.addEventListener('input',(event)=>{
    post=event.target.value;
    console.log(post);
});

const pass =document.querySelector('[name=pass]');
    console.log(pass);
    pass.addEventListener('input',(event)=>{
        passwd=event.target.value;
        console.log(passwd);
    });
const erorpas=document.querySelector('.error_email_pass');
const erorpost=document.querySelector('.error_email_message');
erorpost.style.display='none';
erorpas.style.display='none';

const bubutton = document.querySelector('.button');
bubutton.addEventListener('click', (event) => {
    console.log(event);
    //стопим перезагрузку страницы
    event.preventDefault();
    //Проверяем почту на пустоту
    if (post===''){
        
        email.style.border='1px solid red';
        bubutton.style.background="red";
        erorpost.style.display='block';

        }
    else{
        erorpost.style.display='none';
        bubutton.style.background="rgb(1, 6, 97)";
    }
    if (passwd===''){
        erorpas.style.display='block';
        pass.style.border='1px solid red';
        bubutton.style.background="red";
        }
        else{
            erorpas.style.display='none';
            bubutton.style.background="rgb(1, 6, 97)";
        }
    });