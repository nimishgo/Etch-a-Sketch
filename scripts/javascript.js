const pad = document.querySelector('.pad'); 
const button = document.querySelector('button');
const colorPick = document.querySelector('.colorPicker');
const slider = document.querySelector('.slider');
const reset = document.querySelector('.reset');
let RGB = document.querySelector('.checkbox');

let valpix;
let checkRGB;
let cellColor;

RGB.addEventListener('change', (e) => {
    if(RGB.checked == true)
    {
        checkRGB = true;
    }
    else{
        checkRGB = false;
    }
    // cellColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)})`;
});

colorPick.addEventListener('input' , (e) => {
    cellColor = e.target.value;
    // console.log(e.target.value);
});

slider.addEventListener('change', (e) => {

   valpix = e.target.value;
   console.log(valpix);
   let size = 0;
   
   while(size < valpix*valpix)
   {
    const box = document.createElement('div');
    box.className = 'miniBox';
    pad.appendChild(box);
        box.style.cssText = `display:flex-inline ; flex-wrap : wrap ; border : 0px solid black; width : ${Math.floor(512/valpix)}px ; height : ${Math.floor(512/valpix)}px`;
        box.addEventListener('pointerenter', e => {
        
        if(checkRGB){
            cellColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)})`;
        }

        e.target.style.backgroundColor = `${cellColor}`;
    });
    size++;
   }
});


reset.addEventListener('click', () => {
    location.reload();
});