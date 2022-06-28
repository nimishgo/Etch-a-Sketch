const pad = document.querySelector('.pad'); 
const button = document.querySelector('button');

let size = 0;
button.addEventListener('click', (e) => {
while(size < 256)
{
const box = document.createElement('div');
box.className = 'miniBox';
pad.appendChild(box);
box.style.cssText = 'display:flex-inline ; flex-wrap : wrap ; border : 1px solid black; width : 30px ; height : 30px';
console.log(box);
size++;
}
});

//         for (let index = 0; index < 256; index++) {
//             box[index] = document.createElement('div');
//             pad.appendChild(box);
//             box.className = 'miniBox';
//         }
//     });

    
