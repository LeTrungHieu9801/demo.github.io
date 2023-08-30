'use strict';

const type = document.querySelector('.type-text');

let listTexts = ['Music Distribution', 'Label Manager', 'Youtube MCN', 'Crypto Ventures' , ' Real Estate' ,'Dedicated Server'];
let listTexts2 = ['Dedicated server rental'];
let index = -1;
let current = 0;
let current1 = 0;
let index1 = -1;
function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    var types = document.querySelectorAll('.type-text')
    let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 150);
};

function clearTextFunc() {
    let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearText);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 150);
};

typeTextFunc();


    // =========================================================
