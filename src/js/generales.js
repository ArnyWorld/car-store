let menuBar = document.querySelector(".navigation__label");
let menuMovil = document.querySelector(".menuMovil");
let closeMovil = document.querySelector(".menuMovil__icon");
let body = document.querySelector('body');

document.querySelector('.copy span').textContent = new Date().getFullYear();

let goTop = document.querySelector(".goTop");

cargarListener();
function cargarListener(){

     //Menu
     menuBar.addEventListener("click",()=>{
        menuMovil.style.transform = "translateX(0%)";
        body.style.overflow = "hidden";
    });
    
    closeMovil.addEventListener("click",()=>{
        menuMovil.style.transform = "translateX(-100%)";
        body.style.overflow = "visible";
    })
    //Scroll
    goTop.addEventListener("click",topFunction);
    
    //topShow
    window.addEventListener('scroll',()=>{
        const scrollPX = window.scrollY;
        //console.log(scrollPX);
        if(scrollPX > 200){
            goTop.style.display="flex";      
        }else{
            goTop.style.display="none";
        }
    });
}

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

