// Square

const squareButton = document.querySelector("#squareButton");


function squareDiagonal() {
    const squareSide = 9;
    const diagonal = Math.sqrt(2 * squareSide);

    const pResultSquare = document.querySelector("#pResultSquare");
    pResultSquare.innerText = "The diagonal of a 9cm size square is: " + Math.trunc(diagonal) + " cm.";
}


// Triangle

const triangleButton = document.querySelector("#triangleButton");

function triangleArea() {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;

    const semiPerimeter = (side1 + side2 + side2) / 2;

    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    
    const pResultTriangle = document.querySelector("#pResultTriangle");
    pResultTriangle.innerText = "The area of a 5cm, 6cm and 7cm side triangle is: " + Math.trunc(area) + " cm2";
}


// Circles

const circleCircumButton = document.querySelector("#circleCircumButton");


function circleCircum() {
    const radius = 4;

    const circumference = 2 * Math.PI * radius;

    const pResultCircleCircum = document.querySelector("#pResultCircleCircum");
    pResultCircleCircum.innerText = "The circumference of a 5cm radius circle is: " + Math.trunc(circumference) + " cm";
}


const surfaceCircleButton = document.querySelector("#surfaceCircleButton");


function surfaceCircle() {
    const radius = 4;

    const area = Math.PI * Math.pow(radius, 2);

    const pResultSurfaceCircle = document.querySelector("#pResultSurfaceCircle");
    pResultSurfaceCircle.innerText = "The circumference of a 5cm radius circle is: " + Math.trunc(area) + " cm2";
}








