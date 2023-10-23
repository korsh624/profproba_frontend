'use strict';
let post='';
let passwd='';
//получаем селекторы с которыми нужно работать
const error_email =document.querySelector('[name=error_email]');
error_email.style.display='none';
const error_pass =document.querySelector('[name=error_pass]');
error_pass.style.display='none';
 //читаем почту
const email =document.querySelector('[name=email]');
    console.log(email);
    email.addEventListener('input',(event)=>{
        post=event.target.value;
        console.log(post);
    });

// читаем пароль
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
    if (post!='example@ex.ru'){
        error_email.style.display='block';
        email.style.border='1px solid red';
    }


// проверяем пароль на пустоту
    if(passwd!='pas'){
        error_pass.style.display='block';
        pass.style.border='1px solid red';
    }

});
