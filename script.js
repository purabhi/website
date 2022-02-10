$('.carousel').flipster({
    style:'carousel',
    spacing:-0.3,
});
let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
let position=0
const myslides=$('.carouse_item')
const totalslides=myslides.length
let timer;
function autochange(){
 timer= setInterval(() => {
        if(position==totalslides-1)
        position=0
        else{
            position++
        }
       
        updatePosition()
    }, 4000);
   
   
}

function next(){
    NextSlide()
  
}
function prev(){
    PrevSlide()
   
}


function updatePosition(){
    for(let i of myslides){
        i.classList.remove('active')
        i.classList.add('.hidden')
       
    }
    
    myslides[position].classList.add('active')
}

function NextSlide(){
    if(position===totalslides-1)
    position=0
  
    else{
    position++
    }
    updatePosition()
    
   
   
}
function PrevSlide(){
    if(position===0)
    position=totalslides-1
   
    else{
        position--
    }
    updatePosition()
   
}
function autochange1(){
  
    autochange()
    console.log('start')
    
}
function stopShow1(){
   
    stopShow()
    console.log('end')
 
}
function stopShow(){
    clearInterval(timer)
}
window.onload=function Show(){
    
    autochange()
  }
 