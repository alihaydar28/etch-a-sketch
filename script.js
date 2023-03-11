const sideRightContainer= document.querySelector('.sideRight');
const range=document.querySelector('#myRange');
const rangeText=document.querySelector('.demo');
const colorModeBtn=document.querySelector('.colorModeBtn');
const clearBtn=document.querySelector('.clearBtn');
const eraseBtn=document.querySelector('.eraseBtn');
const colorPicker=document.querySelector('#favcolor');

let currentColor="#333"; // by default #333 but can changed using color picker

let nbOfDivs=0; // to be drawn in the box
let heightWidth=0; // size of each of these divs
let rangeval=0; // level of slider

// gets the range(ex: 16 x 16), clear drawing, gets new nb of divs with their sizes 
function gridNumberAndSize(){
    rangeval=range.value;
    rangeText.textContent=`${rangeval} x ${rangeval}`;

    sideRightContainer.textContent='';

    nbOfDivs=rangeval*rangeval;
    heightWidth=500/rangeval;
}


// loop for creating the 16x16 grid by default when page is loaded
for(let i=0; i<256; i++){
    let divs=document.createElement('div');
    divs.classList.add('new');
    divs.style.cssText = `height:${500/16}px; width:${500/16}px ;`;
    sideRightContainer.appendChild(divs);

    divs.addEventListener('mouseover', function (e) {
        //console.log(e.target);
        e.target.style.background=currentColor;
    });
}

// if user chooses to change the range the new grid gets drawn 
range.oninput = () => {
    
    gridNumberAndSize(); 
   
    for(let i=0; i<nbOfDivs; i++){
        let divs=document.createElement('div');
        divs.classList.add('new');
        divs.style.cssText = `height:${heightWidth}px; width:${heightWidth}px ;`;

        sideRightContainer.appendChild(divs);

        
        divs.addEventListener('mouseover', function (e) {
            e.target.style.background=currentColor;
        });
        
    }
    
};


// buttons event listener

// ColorPicker circle: (color chosen used in the color mode)

colorPicker.addEventListener('mouseout',() => currentColor=colorPicker.value);


// color mode button:

function colorMode(){
    currentColor=colorPicker.value;
    colorModeBtn.style.cssText = "background-color:#333333;color:white;";
    eraseBtn.style.cssText = "background-color:#ededed;color:#333;";
}
colorModeBtn.addEventListener('click',colorMode);

// Erase button:
function erase(){
    currentColor="white";
    eraseBtn.style.cssText = "background-color:#333333;color:white;";
    colorModeBtn.style.cssText = "background-color:#ededed;color:#333;";
} 
eraseBtn.addEventListener('click',erase);


// Clear button: 
function clearGrid(){
    const divs = document.querySelectorAll('.new');
    divs.forEach((div) => {
    div.style.background = 'white';
  });
  
}
clearBtn.addEventListener('click',clearGrid);



