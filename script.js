function greet(name = "John"){
    return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Joseph"));

function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(7, 8));

let x = 10;

function changeValue(){
    let x = 20;
    console.log("variable inside function", x);
}

changeValue();

console.log("variable outside function", x);

function outerFunction() {
    let count = 0;
    console.log("outside count", count);
    return function() {
        count++;
        console.log("inside count", count);
    }
}

let myClosure = outerFunction();
myClosure();
