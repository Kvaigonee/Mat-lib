Geometric is a library for working with geometric shapes,
it allows you to create a shape in specified coordinates and calculate its parameters.

The library allows you to work with three types of shapes: a triangle, a rectangle and a circle.

-npm install
-npm run build - compilation
-npm run start - launching a js file
-npm run dev - development mode
-npm run test - run tests

To get started, you need to import the Geometriс class from main.js of the library file.
You need to compile a typescript project with the flag "module": "es6" for working in the browser or "module": "CommonJS" for node.js

-  import { Geometric } from "./main.js"; for browser
-  const { Geometric } = require("./main"); for node js

Next, you need to create an instance of the Geometric class with the specified coordinates and rotation angle:
The constructor accepts an object of type
{x: number, y: number, rotate: number}

-Angles in all classes and methods are transmitted and calculated in radians
-Warning - it is not necessary to draw two figures synchronously at once, this leads to distortion of the drawing

const geometric = new Geometric({ x: 400, y: 400, rotate: 0 });

Methods of an instance of the geometric class
createTringle() returns an instance of the Triangle class
createRectangle() returns an instance of the createRectangle class
createCircle() returns an instance of the createCircle class

1. Triangle class
   calcToSides1() Calculation on two sides and angle, accepts an object of type { side1: number, side2: number, angle1: number }
   calcToSides2() Calculation by side and two angles { side1: number, angle1: number, angle2: number }
   calcToSides3() Calculation on three sides { side1: number, side2: number, side3: number }
   draw() Asynchronously draws a shape with calculated parameters
   Parametrs:
   angles: (...)
   area: (...)
   calcToSides1: (...)
   calcToSides2: (...)
   calcToSides3: (...)
   distanceToPoint: (...)
   draw: (...)
   perimeter: (...)
   sides: (...)
   vertex: (...)
   x: (...)
   y: (...)

2. Rectangle class
   calculate() Сalculation the rectangle by width and height, accepts an object of type { width: number, height: number }
   draw() Asynchronously draws a shape with calculated parameters
   Parametrs:
   area: (...)
   calculate: (...)
   distanceToPoint: (...)
   draw: (...)
   perimeter: (...)
   sides: (...)
   x: (...)
   y: (...)

3. Circle class
   calculate() Сalculation the circle by radius, accepts an object of type radius: number
   draw() Asynchronously draws a shape with calculated parameters
   Parametrs:
   area: (...)
   calculate: (...)
   diameter: (...)
   distanceToPoint: (...)
   draw: (...)
   perimeter: (...)
   radius: (...)
   x: (...)
   y: (...)
