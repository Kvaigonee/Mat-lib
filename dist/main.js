import { Rectangle } from "./lib/shapes/rectangle.js";
import { Circle } from "./lib/shapes/circle.js";
import { Triangle } from "./lib/shapes/triangle.js";
import { incorrect } from "./lib/errors/incorrect.js";
/**
 * Geometric class contains methods for creating geometric shapes
 * @param сoordinates - {x: number, y: number}
 */
var Geometric = /** @class */ (function () {
    function Geometric(params) {
        this.params = params;
        incorrect(params);
        this.params = params;
    }
    Geometric.prototype._createTringle = function () {
        return new Triangle(this.params);
    };
    Geometric.prototype._createRectangle = function () {
        return new Rectangle(this.params);
    };
    Geometric.prototype._createCircle = function () {
        return new Circle(this.params);
    };
    Object.defineProperty(Geometric.prototype, "createTringle", {
        /**
         * The methods return an instance of the geometric shape class
         * @returns new Class
         */
        get: function () {
            return this._createTringle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Geometric.prototype, "createRectangle", {
        get: function () {
            return this._createRectangle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Geometric.prototype, "createCircle", {
        get: function () {
            return this._createCircle;
        },
        enumerable: false,
        configurable: true
    });
    return Geometric;
}());
export { Geometric };
