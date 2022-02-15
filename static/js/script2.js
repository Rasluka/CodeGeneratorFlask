'use strict';

const counterTxt =  document.getElementById('counterTxt');
const resetBtt = document.getElementById('resetBtt');
const startStopBtt = document.getElementById('startStopBtt');
var counterInterval;
let goingDown = false;


resetBtt.addEventListener('click', function(){
    counterTxt.innerText = 10;
    stopCounter()
})

startStopBtt.addEventListener('click', function(){
    startStopBtt.innerText == 'Start' ? startStopBtt.innerText = 'Stop' : startStopBtt.innerText = 'Start';
    goingDown == false ? goingDown = true : goingDown = false;
    
    if(goingDown){
        counterInterval = setInterval(updateCounter, 1000);
    } else if(!goingDown) {
        stopCounter();
    }
})

function updateCounter(){
    var currentValue = parseInt(counterTxt.innerText);
    
    if(currentValue > 0){
        if(currentValue <= 5){
            counterTxt.classList.add('redText');
        }

        counterTxt.innerText = currentValue - 1;
    } else {
        stopCounter();
    }   
}

function stopCounter(){
    clearInterval(counterInterval);
}