// Larger

const button = document.getElementById("largerOneButton");
const pResultLarger = document.getElementById("pResultLarger");


function largerOne() {
    const int1 = document.getElementById("inputInt1");
    const int2 = document.getElementById("inputInt2");


    if (parseInt(int1.value, 10) > parseInt(int2.value, 10)) {
        pResultLarger.innerText = "First integer is larger than the second integer";
    } 
    else if (parseInt(int2.value, 10) > parseInt(int1.value, 10)) {
        pResultLarger.innerText = "Second integer is larger than the first integer";
    } 
    else {
        pResultLarger.innerText = "First integer is equal to second integer";
    }
} 

/* var num1, num2,
num1 = window.prompt("Input the first integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger between " + num1 + " and " + num2 + " is " + num1 + " .");
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger between " + num1 + " and " + num2 + " is " + num2 + " .");
} else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
} */


// Even or Odd

const buttonEvenOdd = document.getElementById("evenOddButton");
const pResultEvenOdd = document.getElementById("pResultEvenOdd");


function evenOrOdd() {
    const num = document.getElementById("evenOddInt");


    if (parseInt(num.value) % 2 == 0) {
        pResultEvenOdd.innerText = "It an even!";
    } 
    else {
        pResultEvenOdd.innerText = "It's an odd!";
    }
} 
