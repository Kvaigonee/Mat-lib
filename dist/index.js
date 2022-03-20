import { Geometric } from "./main.js";

const context = document.querySelector("canvas").getContext("2d");

const geom = new Geometric({ x: 400, y: 400, rotate: 0 });
const circle = geom.createCircle();
const triangle = geom.createTringle();
const rectangle = geom.createRectangle();

circle.calculate(123);
triangle.calcToSides1({ side1: 210, side2: 235, angle1: 0.2 });
rectangle.calculate({ width: 123, height: 456 });

//triangle.draw(context, 10);
//rectangle.draw(context, 10);
circle.draw(context, 100);

console.log(triangle, rectangle, circle);