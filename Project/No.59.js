// No.1 Ways to print in JavaScript
// console.log("Hello World");
// alert("Me");
// document.write("Hello World");

// No.2 JavaScript Console API
// console.log("Hello World", 12 + 3, "Hi");
// console.warn("This is a Warning");
// console.error("This is a Error");

/*
Multi
Line 
Comment
*/

// No.3 JavaScript Variables
// Varibles = Container to store Data values
// var number = 34;
// var number2 = 134;
// console.log(number + number2);

// No.4 DataType In JavaScript

// Numbers
// var num1 = 455;
// var num2 = 56.66;
// console.log(num1);
// console.log(num2);

// String
// var str1 = "This is a String";
// var str2 = 'This is a String';
// console.log(str1);
// console.log(str2);

// Objects
// var marks = {
//     ravi: 34,
//     shubham:78,
//     Hello: 99.44
// }

// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a);
// console.log(b);
// console.log(a, b);

// var und = undefined;
// var und;
// console.log(und);
// console.log(undefined);
// var n = null;
// console.log(n);

/* 
   At a very high level , there are two types of Data types in JavaScript
   1. Primitive data types: undefined, null, number, string, boolean, Symbol
   2. Reference data types: arrays and Objects
*/

// Array
// var arr = [1, 2, 3, "String", 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// Operators in JavaScript
// No.1 : Arithmetic Operators
// var a = 56;
// var b = 50;
// console.log("The Value of a + b is : ", a + b)
// console.log("The Value of a - b is : ", a - b)
// console.log("The Value of a * b is : ", a * b)
// console.log("The Value of a / b is : ", a / b)

// No.2 : Assignment Operators
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c)

// No.3 : Comarison Operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// No.4 : logical Operators
// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
// console.log(!true);
// console.log(!false);

// Function In JavaScript
// function avg(a, b){
// return (a + b)/2;
//    c =  (a + b)/2;
//    return c;
// }
// DRY = Do Not Repeat YourSelf
// c1 = avg(2, 3);
// c2 = avg(34, 75);
// console.log(c1, c2);

// Conitionals In JavaScript
// var age = 34;

// Single If Statement
// if (age > 8) {
//    console.log('You are not a kid');
// }

// If-Else Statement
// if (age > 8) {
//    console.log('You are not a kid');
// }
// else{
//    console.log('You are a Kid');
// }

// If-Else Lader
// var age = 34;
// if (age > 32) 
// {
//    console.log("You are not a kid");
// } else if (age > 26)
// {
//    console.log("Bachhe nahi Hahe")
// }
// else if (age > 22)
// {
//    console.log("Yes Bachhe nahi Hahe")
// }
// else if (age > 18) {
//    console.log("18 Bachhe nahi Hahe")
// }
// else {
//    console.log("Bachhe Hahe")
// }
// console.log("End Of Ladder");

// For Loops
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr .length; i++) {
//    console.log(arr[i]);
// }

// For-Each Loops
// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(function(element){
//    console.log(element);
// })

// let j = 0;
// const a = 0;

// While Loop
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// while (j < arr.length) {
//    console.log(arr[j]);
//    j++;
// }

// Do-While Loop
let arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
do{
   console.log(arr[j]);
   j++;
}while(j < Array.length); 
