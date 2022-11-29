

const squareButton = document.querySelector("#squareButton");


function squareDiagonal() {
    const squareSide = 9;
    const diagonal = Math.sqrt(2 * squareSide);

    const pResultSquare = document.querySelector("#pResultSquare");
    pResultSquare.innerText = "The diagonal of a 9cm size square is: " + diagonal;
}



const triangleButton = document.querySelector("#triangleButton");


function triangleArea(side1, side2, side3, height) {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;

    const height = Math.sqrt(Math.pow(side2, 2) - (Math.pow(side1, 2) / 4));

    const area = (side1 * height) / 2;

    const pResultTriangle = document.querySelector("#pResultTriangle");
    pResultTriangle.innerText = "The area of a 5cm, 6cm and 7cm side triangle is: " + area;
}




