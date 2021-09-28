const sidebar = document.querySelector('.sidebar');
const slider = document.querySelector('.main-slide');
const slidesCount = slider.querySelectorAll('div').length;
const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button');
let activeSlide = 0;
sidebar.style.top = `${-(slidesCount-1)*100}vh`;

upBtn.addEventListener('click',()=>{changeSlide('up')});
downBtn.addEventListener('click',()=>{changeSlide('down')});


function changeSlide(direction){
    if(direction==='up'){
        activeSlide++;
        if(activeSlide===slidesCount){
            activeSlide=0;
        }
    }
    else if(direction==='down'){
        activeSlide--;
        if(activeSlide<0){
            activeSlide=slidesCount-1;
        }
    }
    
    slider.style.transform=`translateY(-${activeSlide*100}vh)`;
    sidebar.style.transform=`translateY(${activeSlide*100}vh)`;
    
}

