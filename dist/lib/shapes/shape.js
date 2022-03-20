import { Formulas } from "../math/formulas.js";
/**
 * Shape class contains general properties and methods of shapes
 * @param сoordinates and shape rotation - x: number, y: number, rotate: number
 */
var Shape = /** @class */ (function () {
    function Shape(x, y, rotate) {
        this._perimeter = 0;
        this._area = 0;
        this._rotate = 0;
        this._x = x;
        this._y = y;
        this._rotate = rotate;
    }
    Shape.prototype._distanceToPoint = function (x, y) {
        return Formulas.vectorLength(x, y, this.x, this.y);
    };
    Object.defineProperty(Shape.prototype, "distanceToPoint", {
        /**
         * Getters return private properties and methods
         * @return returns the distance to a point in space, perimeter, area, and coordinates
         */
        get: function () {
            return this._distanceToPoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "perimeter", {
        get: function () {
            return this._perimeter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
export { Shape };
