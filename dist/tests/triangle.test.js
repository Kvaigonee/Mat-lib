import { Geometric } from "../main";
describe("Calculation of triangle parameters", function () {
    var geom = new Geometric({ x: 10, y: 10, rotate: Math.PI });
    var triangle = geom.createTringle();
    test("Checking the calculation on two sides and angle", function () {
        triangle.calcToSides1({ side1: 10, side2: 15, angle1: 0.7 });
        expect(Math.floor(triangle.perimeter)).toBe(34);
        expect(Math.floor(triangle.area)).toBe(48);
        expect(triangle.angles).toEqual([0.7, 1.7220276944291784, 0.719564959160615]);
        expect(triangle.sides).toEqual([10, 15, 9.774832162991519]);
    });
    test("Checking the calculation by side and two angles", function () {
        triangle.calcToSides2({ side1: 10, angle1: 0.5, angle2: 0.7 });
        expect(Math.floor(triangle.perimeter)).toBe(22);
        expect(Math.floor(triangle.area)).toBe(16);
        expect(triangle.angles).toEqual([0.5, 0.7, 1.9415926535897932]);
        expect(triangle.sides).toEqual([10, 6.911917074477109, 5.14383512260838]);
    });
    test("Checking the calculation on three sides", function () {
        triangle.calcToSides3({ side1: 10, side2: 15, side3: 12 });
        expect(Math.floor(triangle.perimeter)).toBe(37);
        expect(Math.floor(triangle.area)).toBe(59);
        expect(triangle.angles).toEqual([0.9231220083516779, 1.491546731682546, 0.7269239135555692]);
        expect(triangle.sides).toEqual([10, 15, 12]);
    });
});
