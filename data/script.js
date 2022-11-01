'use strict';
let post='';
let passwd='';
const email =document.querySelector('[name=email]');
    console.log(email);
    email.addEventListener('input',(event)=>{
        post=event.target.value;
        console.log(post);
    });