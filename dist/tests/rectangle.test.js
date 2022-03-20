import { Geometric } from "../main";
describe("Calculation of rectangle parameters", function () {
    var geom = new Geometric({ x: 10, y: 10, rotate: Math.PI });
    var rectangle = geom.createRectangle();
    test("Calculation by width and height", function () {
        rectangle.calculate({ width: 123, height: 456 });
        expect(Math.floor(rectangle.perimeter)).toBe(1158);
        expect(Math.floor(rectangle.area)).toBe(56088);
        expect(rectangle.sides).toEqual([456, 123, 456, 123]);
    });
});
