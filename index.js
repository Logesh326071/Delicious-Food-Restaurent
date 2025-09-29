//Hamburger menu

let menu=document.querySelector(".menu");
let nav=document.querySelector(".nav-items");

menu.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

//Footer menu

let toggleBtn=document.querySelector('.toggle-btn');
let showmore=document.querySelector('.extra-cities');
let showless=document.querySelector('.show-less');

toggleBtn.addEventListener('click',()=>{
    showmore.classList.remove('hidden')
    toggleBtn.style.display='none';
})

showless.addEventListener('click',()=>{
    showmore.classList.add('hidden')
    toggleBtn.style.display='inline';
})
