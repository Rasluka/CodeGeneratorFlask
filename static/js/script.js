'use strict';

const newCodeBtt = document.getElementById('newCodeBtt');
const generatedCodeTxtArea = document.getElementById('generatedCode');
const counterTxt =  document.getElementById('counterTxt');
var counterInterval;
let goingDown = false;


generatedCodeTxtArea.innerText = 'No code yet!';

newCodeBtt.addEventListener('click', function(){
    stopCounter();
    generateNewCode();
})

// Function that generate a new code
function generateNewCode(){
    var min = 100000, max = 999999;
    var newCode = Math.floor(Math.random() * (max - min) + min);
    counterTxt.innerText = 10
    generatedCodeTxtArea.innerText = newCode;

    counterTxt.classList.remove('warningText');
    counterTxt.classList.add('normalText');

    counterInterval = setInterval(updateCounter, 1000);
}

function updateCounter(){
    var currentValue = parseInt(counterTxt.innerText);
    
    if(currentValue > 0){
        if(currentValue <= 5){
            counterTxt.classList.add('warningText');
            counterTxt.classList.add('makeItBigger')
        }

        counterTxt.innerText = currentValue - 1;
    } else {
        stopCounter();
        generateNewCode();
    }   
}

function stopCounter(){
    clearInterval(counterInterval);
}