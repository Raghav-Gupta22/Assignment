let display = document.getElementById('display');
let nums = document.getElementsByClassName('num');
let ops = document.getElementsByClassName('op');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let currentNum = '';
let prevNum = '';
let operation = null;

Array.from(nums).forEach((num) => {
    num.addEventListener('click', () => {
        currentNum += num.innerText;
        display.value = currentNum;
    });
});

Array.from(ops).forEach((op) => {
    op.addEventListener('click', () => {
        if (operation !== null) return;
        operation = op.getAttribute('data-op');
        prevNum = currentNum;
        currentNum = '';
    });
});

equals.addEventListener('click', () => {
    if (operation === null || currentNum === '') return;
    let result = operate(prevNum, currentNum, operation);
    display.value = result;
    currentNum = result;
    operation = null;
});

clear.addEventListener('click', () => {
    display.value = '';
    currentNum = '';
    prevNum = '';
    operation = null;
});

function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

