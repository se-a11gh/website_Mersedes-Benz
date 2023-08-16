
$(function(){
//-----------------------------------------------------------//
$('.block_radio input').change(function(){
    let abc = $('.block_radio input:checked').val();
    switch(abc){
        case '1': $('.big_foto div').fadeOut(20); $('.foto_1').fadeIn(200); break;
        case '2': $('.big_foto div').fadeOut(20); $('.foto_2').fadeIn(200); break;
        case '3': $('.big_foto div').fadeOut(20); $('.foto_3').fadeIn(200); break;
        case '4': $('.big_foto div').fadeOut(20); $('.foto_4').fadeIn(200); break;
    }
});

}); // END JQuery



let anim = document.querySelector("#svg1 path"); // Траэктория
window.addEventListener('scroll', ()=>{
    if(scrollY > 2700){anim.style.strokeDashoffset = 1;  }
});



let arrowList = document.querySelectorAll(".arrowList");
arrowList.forEach((i)=>{
    i.addEventListener("click", ()=>{
        const sosed = i.nextElementSibling;
        sosed.classList.toggle('MenuList_sub');
    });
});
function a(){
    arrowList.forEach((e)=>{
        e.addEventListener('click', function(){
        e.style.transform = "rotate(90deg)";            
        e.addEventListener('click', function(){
        e.style.transform = "rotate(0deg)";
        a(); }); });});
}
a();




let Model1 = document.querySelectorAll('.model1');
let Model2 = document.querySelectorAll('.model2');
let Model3 = document.querySelectorAll('.model3');
let Model4 = document.querySelectorAll('.model4');
let Model5 = document.querySelectorAll('.model5');
let Model6 = document.querySelectorAll('.model6');
let Model = document.querySelectorAll('.card_model');
let btnModel1 = document.querySelectorAll('.btnModel1');
let btnModel2 = document.querySelectorAll('.btnModel2');
let btnModel3 = document.querySelectorAll('.btnModel3');
let btnModel4 = document.querySelectorAll('.btnModel4');
let btnModel5 = document.querySelectorAll('.btnModel5');
let btnModel6 = document.querySelectorAll('.btnModel6');

btnModel1.forEach((e)=>{ e.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model1.forEach((el)=>{el.style.display = "flex";});
    });});

btnModel2.forEach((el)=>{ el.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model2.forEach((ell)=>{ell.style.display = "flex";});
    });});
btnModel3.forEach((el)=>{ el.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model3.forEach((ell)=>{ell.style.display = "flex";});
    });});
    btnModel4.forEach((e)=>{ e.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model4.forEach((el)=>{el.style.display = "flex";});
    });});


btnModel5.forEach((el)=>{ el.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model5.forEach((ell)=>{ell.style.display = "flex";});
    });});
btnModel6.forEach((el)=>{ el.addEventListener('click', ()=>{
        Model.forEach((elx)=>{elx.style.display = "none";});
        Model6.forEach((ell)=>{ell.style.display = "flex";});
    });});



// боковое меню -----------------------------------------------------------//

    let element_body = document.querySelector('body');
    let elemAbc = document.querySelector('.img_menu');
    let cll = document.querySelector('.backMenu');  
    let asideMenu = document.querySelector('.asideMenu');  
    elemAbc.addEventListener('click', (e)=>{
    element_body.classList.toggle('page_lock');
    asideMenu.style.left = "0%";
    });
 
    cll.addEventListener('click', (e)=>{
        element_body.classList.toggle('page_lock');
        asideMenu.style.left = "-150%";
    });





// popUp связь с менеджером -----------------------------------------------------------//
let btnClosePop = document.querySelector('.btnClosePop');
let wrap_PopUP_avto = document.querySelector('.wrap_PopUP_avto');
let btnPricefoto = document.querySelectorAll('.btnCall');

btnPricefoto.forEach((e)=>{
e.addEventListener('click', ()=>{
    wrap_PopUP_avto.style.display = "flex";
});
});
btnClosePop.addEventListener('click', ()=>{
    wrap_PopUP_avto.style.display = "none";
});
//--------------------------------------------------------------




// popUp Світ Mercedes-Benz -------------------------------------------------------------------//
let btnClosePop2 = document.querySelector('.btnClosePop2');
let Slider = document.querySelector('.Slider');
let wrap_PopUP_avto2 = document.querySelector('.wrap_PopUP_avto2');
let worldMB = document.querySelector('.worldMB');

worldMB.addEventListener('click', ()=>{
    wrap_PopUP_avto2.style.display = "flex";
});

btnClosePop2.addEventListener('click', ()=>{
    wrap_PopUP_avto2.style.display = "none";
});
Slider.addEventListener('click', ()=>{
    wrap_PopUP_avto2.style.display = "none";
});


//-------------------------------------------------------------------//
//-------------------------------------------------------------------//





let slider = document.querySelector('.Slider');
let line = document.querySelector('.slider_line');
let sl_width = slider.clientWidth;
let count = 0;
function toMove_next(){
    count++;
    if(count > 3){
        count = 0;
    } scrol();
}
function toMove_prev(){
    count--;
    if(count < 0){
        count = 0;
    } scrol();
}
setInterval(toMove_next, 4000);

function scrol(){
    line.style.left = `${((-count * sl_width) / 2) * 2}px`;
    console.log(count);
   
    if(count == 1){
        d.innerHTML = "Mercedes-Benz EQS 2022";
        p1.innerHTML = "Седан";
        p2.innerHTML = "500км/ч";
        p3.innerHTML = "Електро";
        price.innerHTML = "18400 $ ";
    }
    else if(count == 2){
        d.innerHTML = "Mercedes-Benz 458-S";
        p1.innerHTML = "Купе";
        p2.innerHTML = "760км/ч";
        p3.innerHTML = "Гибрид";
        price.innerHTML = "15755 $ ";
    }
    else if(count == 3){
        d.innerHTML = "Mercedes-Benz G-Клас";
        p1.innerHTML = "Внедорожник";
        p2.innerHTML = "380км/ч";
        p3.innerHTML = "Гибрид";
        price.innerHTML = "14433 $ ";
    }
    else{
        d.innerHTML = "Mercedes-Benz AMG GT 2022";
        p1.innerHTML = "Седан";
        p2.innerHTML = "300км/ч";
        p3.innerHTML = "Бензин";
        price.innerHTML = "10400 $ ";
    }
}
let Info_slideName = document.querySelector('.Info_slideName');
let d = document.createElement('p');
Info_slideName.append(d);
d.innerHTML = "Mercedes-Benz AMG GT 2022";

let propert_1 = document.querySelector('.propert_1');
let p1 = document.createElement('p');
propert_1.append(p1);
p1.innerHTML = "Седан";

let propert_2 = document.querySelector('.propert_2');
let p2 = document.createElement('p');
propert_2.append(p2);
p2.innerHTML = "300км/ч";

let propert_3 = document.querySelector('.propert_3');
let p3 = document.createElement('p');
propert_3.append(p3);
p3.innerHTML = "Бензин";


let Info_slidePrice = document.querySelector('.Info_slidePrice');
let price = document.createElement('p');
Info_slidePrice.prepend(price);
price.innerHTML = "11755 $";






//------------------------------------ свайп -------------------


document.addEventListener('touchstart', handStart, false);
document.addEventListener('touchmove', handMove, false);

let x1 = null;
let y1 = null;

function handStart(e){
    const firT = e.touches[0];
    x1 = firT.clientX;
    y1 = firT.clientY;
}
function handMove(e){
if(!x1 || !y1){
return false;
}
let x2 = e.touches[0].clientX;
let y2 = e.touches[0].clientY;
let xD = x2 - x1;
let yD = y2 - y1;

if(Math.abs(xD) > Math.abs(yD)){
    if(xD > 0){
        toMove_prev();
    }else{
        toMove_next();
    }
}
x1 = null;
y1 = null;
}







