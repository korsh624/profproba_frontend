// 'use strict';
// let post='';
// let passwd='';
// let check_box='';
// let countcheckbox=0;
// let checkboxcklic=false;
// //получаем селекторы с которыми нужно работать
// const error_email =document.querySelector('[name=error_email]');
// error_email.style.display='none';
// const error_email_valid =document.querySelector('[name=error_email_valid]');
// error_email_valid.style.display='none';
// const error_pass =document.querySelector('[name=error_pass]');
// error_pass.style.display='none';
// const error_pass_length =document.querySelector('[name=error_pass_length]');
// error_pass_length.style.display='none';
// const error_checkbox =document.querySelector('[name=error_checkbox]');
// const checkbox =document.querySelector('[name=checkbox]');
// error_checkbox.style.display='none';
// const asterisk_login = document.querySelector('[name=asterisk_login]');
// const asterisk_pass = document.querySelector('[name=asterisk_pass]');
// const asterisk_chekbox = document.querySelector('[name=asterisk_chekbox]');
//
//  //читаем почту
// const email =document.querySelector('[name=email]');
//     console.log(email);
//     email.addEventListener('input',(event)=>{
//         post=event.target.value;
//         console.log(post);
//     });
//
// // читаем пароль
//     const pass =document.querySelector('[name=pass]');
//     console.log(pass);
//     pass.addEventListener('input',(event)=>{
//         passwd=event.target.value;
//         console.log(passwd);
//     });
//
// // читаем чекбокс
// const checks =document.querySelector('[name=checkbox]');
// console.log(checks);
// checks.addEventListener('input',(event)=>{
//     console.log(event.target.value);
//     countcheckbox++;
//     let counter=countcheckbox%2;
//
//     if(counter==0){
//         checkboxcklic=false;
//     } else {
//         checkboxcklic=true;
//     }
//     console.log(checkboxcklic)
// });
// // проверяем почту на валидность
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    console.log (re.test(String(email).toLowerCase()));
//     return re.test(String(email).toLowerCase());
// }
// // ловим клик по кнопке
// const bubutton = document.querySelector('.button');
// bubutton.addEventListener('click', (event) => {
//     console.log(event);
//     //стопим перезагрузку страницы
//     event.preventDefault();
//     //Проверяем почту на пустоту
//     if (post===''){
//         error_email_valid.style.display='none';
//         error_email.style.display='block';
//         email.style.border='1px solid red';
//         asterisk_login.style.color='red';
//         email.style.border='1px solid red';
//     }
//     // если не пуста проверяем на валидность
//     else if(!validateEmail(post)){
//         error_email.style.display='none';
//         error_email_valid.style.display='block';
//         email.style.border='1px solid red';
//         asterisk_login.style.color='red';
//     }
//     // если все ок
//     else{
//         error_email_valid.style.display='none';
//         error_email.style.display='none';
//         email.style.border='';
//         asterisk_login.style.color='';
//
//     }
//
// // проверяем пароль на пустоту
//     if(passwd==''){
//         error_pass_length.style.display='none';
//         error_pass.style.display='block';
//         pass.style.border='1px solid red';
//         asterisk_pass.style.color='red';
//     }
//     // проверяем на размерность
//     else if(passwd.length<7){
//         error_pass.style.display='none';
//         error_pass_length.style.display='block';
//         pass.style.border='1px solid red';
//         asterisk_pass.style.color='red';
//     }
//     // если все ок
//     else{
//         error_pass.style.display='none';
//         error_pass_length.style.display='none';
//         pass.style.border='';
//         asterisk_pass.style.color='';
//
//     }
// // проверяем чекбокс
//     if(!checkboxcklic){
//         error_checkbox.style.display='block';
//         asterisk_chekbox.style.color='red';
//         checkbox.style.border='3px solid red';
//     } else{
//         error_checkbox.style.display='none';
//         asterisk_chekbox.style.color='';
//         checkbox.style.border='';
//     }
//
//
// });
//
//
//
