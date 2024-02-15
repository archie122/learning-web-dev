function sum (a, b) {
    return a + b;
}

let sum2 = (a,b) => a + b

function isPositive (a) {
    return a > 0;
}

let positive = a => a > 0

function randomNumber () {
    return Math.random();
}

let random = () => Math.random()

document.addEventListener('click', function () {
    console.log('I was clicked');
})

document.addEventListener('click', () => {
    console.log('I was clicked');
})

