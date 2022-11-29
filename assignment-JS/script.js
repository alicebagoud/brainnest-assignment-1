

const squareButton = document.querySelector("#squareButton");


function squareDiagonal() {
    const squareSide = 9;
    const diagonal = Math.sqrt(2 * squareSide);

    const pResultSquare = document.querySelector("#pResultSquare");
    pResultSquare.innerText = "The diagonal of a 9cm size square is: " + diagonal + " cm.";
}


const triangleButton = document.querySelector("#triangleButton");


/* function triangleArea() {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;

    // TODO side3 ?? 

    const height = Math.sqrt(Math.pow(side2, 2) - (Math.pow(side1, 2) / 4));

    const area = (side1 * height) / 2;

    const pResultTriangle = document.querySelector("#pResultTriangle");
    pResultTriangle.innerText = "The area of a 5cm, 6cm and 7cm side triangle is: " + area + " cm";
}
 */
function triangleArea() {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;

    const semiPerimeter = (side1 + side2 + side2) / 2;

    const area = Math.sqrt(semiPerimeter(semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));

    const pResultTriangle = document.querySelector("#pResultTriangle");
    pResultTriangle.innerText = "The area of a 5cm, 6cm and 7cm side triangle is: " + area + " cm";
}


const circleCircumButton = document.querySelector("#circleCircumButton");


function circleCircum() {
    const radius = 4;

    const circumference = 2 * Math.PI * radius;

    const pResultCircleCircum = document.querySelector("#pResultCircleCircum");
    pResultCircleCircum.innerText = "The circumference of a 5cm radius circle is: " + circumference + " cm";
}

const surfaceCircleButton = document.querySelector("#surfaceCircleButton");


function surfaceCircle() {
    const radius = 4;

    const area = Math.PI * Math.pow(radius, 2);

    const pResultSurfaceCircle = document.querySelector("#pResultSurfaceCircle");
    pResultSurfaceCircle.innerText = "The circumference of a 5cm radius circle is: " + area + " cm";
}








