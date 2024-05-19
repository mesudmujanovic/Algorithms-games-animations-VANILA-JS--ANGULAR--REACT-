function calculate(num1, num2, cb){
    return cb(num1, num2);
}

function add(a, b) {
    return a + b;
}

const res = calculate(5, 10, add);
console.log(res);

////////////////

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

const a = greet("Alice", sayGoodbye);;
console.log(a);

/////////////////////
function delayedGreeting(name, callback) {
 setTimeout(function() {
    console.log("hello," + name + "!");
    callback();
 },1000)
}

function afterGreeting(){
    console.log("This is executed after the greeting.");
}

delayedGreeting("mesud", afterGreeting);


//////////////////////
