console.log('5' + 3);
console.log('5' - 3);
console.log(5 + 3);

const a = '5' - 3;
console.log(typeof(a));

console.log(5 == '5');
console.log(5 === '5');

console.log(typeof(NaN));

console.log(NaN === NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

let array = ["neha", "mesud", "nadi", "dzeki"];
let h1Element = document.querySelector('h1');
const startValue = h1Element.textContent;
document.addEventListener('click', function changeName() {
   if(array.length > 0) {
    h1Element.textContent = array.shift();
   } else {
     array = ["neha", "mesud", "nadi", "dzeki"];
    h1Element.textContent = startValue;
   }
});

let counter = 0;
const helloWorld = h1Element.textContent;
document.addEventListener('click', function changeName() {
 if(counter < array.length) {
    h1Element.textContent = array[counter];
    counter++;
 } else {
    console.log(helloWorld);
    counter = 0;
    h1Element.textContent = helloWorld;
 }
});

document.addEventListener('click', function changeName() {
    h1Element.textContent = array[counter % array.length];
    counter++;
});

let array = ["neha", "mesud", "nadi", "dzeki"];
let h1Element = document.querySelector('h1');

document.addEventListener('click', function changeName() {
    if (array.length > 0) {
        h1Element.textContent = array.shift();
    } else {
        array = ["neha", "mesud", "nadi", "dzeki"]; // Resetujemo niz
        h1Element.textContent = array.shift();
    }
});
