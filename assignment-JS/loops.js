const button = document.getElementById("largerOne");
const pResultLarger = document.getElementById("pResultLarger");

function largerOne() {
    const int1 = document.getElementById("inputInt1");
    const int2 = document.getElementById("inputInt2");


    if (int1.value > int2.value) {
        pResultLarger.innerText("First integer = ", int1, " is larger than second integer = ", int2);
    } 
    else if (int1.value < int2.value) {
        pResultLarger.innerText("Second integer = ", int2, " is larger than first integer = ", int1);
    } 
    else {
        document.write("First integer= ", int1, " is equal to second integer = ", int2);
    }
}

console.log(largerOne);