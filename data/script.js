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

const bubutton = document.querySelector('.button');
bubutton.addEventListener('click', (event) => {
    console.log(event);
    //стопим перезагрузку страницы
    event.preventDefault();
    //Проверяем почту на пустоту
    if (post===''){
        email.style.border='1px solid red';
        bubutton.style.background="red"

        }
    if (post===''){
        pass.style.border='1px solid red';
        }
    });