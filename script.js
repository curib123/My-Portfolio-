let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let body = document.querySelector('body');
let btns = document.querySelector('#btns');



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    body.classList.toggle('body-active');
}
menu.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    body.classList.remove('body-active');
   
}

