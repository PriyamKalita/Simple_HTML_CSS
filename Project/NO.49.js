// function greet(name, greetText){
function greet(name, greetText = "ABCDEFGHI"){
    let name1 = "name1";
    console.log(greetText + " " + name1);
    console.log(name + " Is Nice");
}

function sum(a, b, c){
    let d = a + b + c;
    return d;
}

let name1 = "Hello1";
let name2 = "Hello2";
let name3 = "Hello3";
let name4 = "Hello4";

let greetText = "Good Morning";

greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
// greet(name4, greetText);
// greet(name4);

let returnValue = sum(1, 2, 3);
console.log(returnValue);

// console.log(name1 + " Is Nice");
// console.log(name2 + " Is Nice");
// console.log(name3 + " Is Nice");
// console.log(name4 + " Is Nice");