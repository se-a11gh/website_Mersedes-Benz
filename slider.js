let slider2 = document.querySelector('.Slider_temlAuto');
let line2 = document.querySelector('.slider_line_temlAuto');
let btn_Prev = document.querySelector('.btn_Prev');
let btn_Next = document.querySelector('.btn_Next');
  


let sl_width2 = slider2.clientWidth;
let count2 = 0;
function toMove_next2(){
    count2++;
    if(count2 > 2){
        count2 = 0;
    } scrol2();
}
function toMove_prev2(){
    count2--;
    if(count2 < 0){
        count2 = 0;
    } scrol2();
}
setInterval(toMove_next2, 4000);


function scrol2(){
    line2.style.left = `${((-count2 * sl_width2) / 2) * 2}px`;
}

btn_Prev.addEventListener('click', toMove_prev2);
btn_Next.addEventListener('click', toMove_next2);

// document.addEventListener('touchstart', handStart, false);
// document.addEventListener('touchmove', handMove, false);

// let x1 = null;
// let y1 = null;

// function handStart(e){
//     const firT = e.touches[0];
//     x1 = firT.clientX;
//     y1 = firT.clientY;
// }
// function handMove(e){
// if(!x1 || !y1){
// return false;
// }
// let x2 = e.touches[0].clientX;
// let y2 = e.touches[0].clientY;
// let xD = x2 - x1;
// let yD = y2 - y1;

// if(Math.abs(xD) > Math.abs(yD)){
//     if(xD > 0){
//         toMove_prev2();

//     }else{
//         toMove_next2();
//     }
// }
// x1 = null;
// y1 = null;
// }