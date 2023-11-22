const moon = document.querySelector('.bg-btn1');
const sun =document.querySelector('.bg-btn');
const body = document.querySelector('body');
const heroBtns = document.querySelectorAll('.hero-btn');
const section = document.querySelector('section');
const strong= document.querySelector('.logo');
const menu = document.querySelector('.menu')
const navLists = document.querySelector('.nav_lists');
const navList = document.querySelectorAll('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo0');
const sendBtn = document.querySelector('.send-msg');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const errorMsg = document.querySelector('.error');


moon.addEventListener('click', function(){
    body.classList.add('dark-body');
    body.style.color = '#fff'
  for(const heroBtn of heroBtns){
    heroBtn.style.color = "#fff"
  }
  section.style.color = '#fff';
   strong.classList.add('strong');
});

sun.addEventListener('click', function(){
    body.classList.remove('dark-body');
    body.style.color = '#000'
    section.style.color = '#000'
    for(const heroBtn of heroBtns){
        heroBtn.style.color = "#000"
      }
});

function mobileNav(){
    navLists.classList.toggle('hide');
    navLists.classList.toggle('mobile-nav')
    logo.classList.toggle('hide');
    for(const list of navList){
        list.style.padding = "1.5rem 1rem 0";
    }
    for(const link of navLinks){
        link.style.color ='#000';
       link.style.fontSize = '1rem';
    }
}
menu.addEventListener('click', mobileNav);

sendBtn.addEventListener('click', function(){   
    for(const input of inputs) {
        if(!input.value && !textArea.value){
            input.style.outline ="1px solid #f00";
            textArea.style.outline ="1px solid #f00";
            errorMsg.classList.remove('hide');
            errorMsg.style.color = "#f00";
              
        }
    }
      
});


