/**
 * General mathematical methods
 */
var Formulas = /** @class */ (function () {
    function Formulas() {
    }
    Formulas.vectorLength = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    Formulas.calcPerimeter = function (sides) {
        return sides.reduce(function (result, side) { return result + side; });
    };
    Formulas.calcAreaTriangle = function (perimeter, a, b, c) {
        var p = perimeter / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    };
    Formulas.calcThirdAngle = function (angle1, angle2) {
        return Math.PI - (angle1 + angle2);
    };
    Formulas.calcAngleBySides = function (side1, side2, side3) {
        return Math.acos((Math.pow(side1, 2) + Math.pow(side2, 2) - Math.pow(side3, 2)) / (2 * side1 * side2));
    };
    Formulas.getCoords = function (x, y, angle, length) {
        return {
            x: x + Math.cos(angle) * length,
            y: y + Math.sin(angle) * length,
        };
    };
    return Formulas;
}());
export { Formulas };
