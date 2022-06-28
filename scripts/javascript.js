const pad = document.querySelector('.pad'); 
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
const box = document.createElement('div');
box.className = 'miniBox';
pad.appendChild(box);
box.style.cssText = 'display:flex-inline ; flex-wrap : wrap ; border : 1px solid black; width : 31px ; height : 31px';
console.log(box);
});

//         for (let index = 0; index < 256; index++) {
//             box[index] = document.createElement('div');
//             pad.appendChild(box);
//             box.className = 'miniBox';
//         }
//     });

    
