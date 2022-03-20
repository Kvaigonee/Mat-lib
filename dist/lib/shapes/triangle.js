var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Shape } from "./shape.js";
import { Formulas } from "../math/formulas.js";
import { incorrect } from "../errors/incorrect.js";
import { shapeDrawer } from "../drawing/shapeDrawer.js";
/**
 * Triangle class contains methods and properties for working with a triangle
 * sides - array numbers
 * angles - array numbers
 * vertexes - array objects
 * @param *shape params from interfaces
 */
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(params) {
        var _this = this;
        var x = params.x, y = params.y, rotate = params.rotate;
        _this = _super.call(this, x, y, rotate) || this;
        _this._sides = [0, 0, 0];
        _this._angles = [0, 0, 0];
        _this._vertexes = [];
        _this._vertexes[0] = { x: x, y: y };
        return _this;
    }
    /**
     * Сalculation of a triangle on two sides and an angle
     */
    Triangle.prototype._calcToSides1 = function (params) {
        incorrect(params);
        var side1 = params.side1, side2 = params.side2, angle1 = params.angle1;
        this._sides[0] = side1;
        this._sides[1] = side2;
        this._sides[2] = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2) - 2 * side1 * side2 * Math.cos(angle1));
        this._angles[0] = angle1;
        this._angles[1] = Formulas.calcAngleBySides(this._sides[0], this._sides[2], this._sides[1]);
        this._angles[2] = Formulas.calcThirdAngle(this._angles[0], this._angles[1]);
        this.calcValues();
    };
    /**
     * Сalculation of a triangle by side and two angles
     */
    Triangle.prototype._calcToSides2 = function (params) {
        incorrect(params);
        var side1 = params.side1, angle1 = params.angle1, angle2 = params.angle2;
        this._angles[0] = angle1;
        this._angles[1] = angle2;
        this._angles[2] = Formulas.calcThirdAngle(angle1, angle2);
        this._sides[0] = side1;
        this._sides[1] = (side1 * Math.sin(angle2)) / Math.sin(this._angles[2]);
        this._sides[2] = (side1 * Math.sin(angle1)) / Math.sin(this._angles[2]);
        this.calcValues();
    };
    /**
     * calculation of a triangle on three sides
     */
    Triangle.prototype._calcToSides3 = function (params) {
        incorrect(params);
        var side1 = params.side1, side2 = params.side2, side3 = params.side3;
        this._sides[0] = side1;
        this._sides[1] = side2;
        this._sides[2] = side3;
        this._angles[0] = Formulas.calcAngleBySides(this._sides[0], this._sides[1], this._sides[2]);
        this._angles[1] = Formulas.calcAngleBySides(this._sides[0], this._sides[2], this._sides[1]);
        this._angles[2] = Formulas.calcThirdAngle(this._angles[0], this._angles[1]);
        this.calcValues();
    };
    /**
     * Method calculates the main parameters
     */
    Triangle.prototype.calcValues = function () {
        this._perimeter = Formulas.calcPerimeter(this._sides);
        this._area = Formulas.calcAreaTriangle(this.perimeter, this._sides[0], this._sides[1], this._sides[2]);
    };
    /**
     * Мethod draws a shape with animation
     */
    Triangle.prototype._draw = function (context, step) {
        var _this = this;
        var paramForDrawing = {
            x: this._x,
            y: this._y,
            length: this.sides[0],
            angle: this._rotate,
            step: step,
            context: context,
        };
        /**
         * ShapeDrawer uses Promise for asynchronous rendering
         */
        shapeDrawer(paramForDrawing)
            .then(function () {
            _this._vertexes[1] = Formulas.getCoords(_this._x, _this._y, _this._rotate, _this.sides[0]);
            paramForDrawing = {
                x: _this._vertexes[1].x,
                y: _this._vertexes[1].y,
                length: _this.sides[1],
                angle: _this._rotate + (Math.PI - _this._angles[0]),
                step: step,
                context: context,
            };
            return shapeDrawer(paramForDrawing);
        })
            .then(function () {
            _this._vertexes[2] = Formulas.getCoords(_this._vertexes[1].x, _this._vertexes[1].y, _this._rotate + (Math.PI - _this._angles[0]), _this.sides[1]);
            paramForDrawing = {
                x: _this._vertexes[2].x,
                y: _this._vertexes[2].y,
                length: _this.sides[2],
                angle: _this._rotate + (Math.PI + _this._angles[1]),
                step: step,
                context: context,
            };
            shapeDrawer(paramForDrawing);
        });
    };
    Object.defineProperty(Triangle.prototype, "calcToSides1", {
        /**
         * Getters return private properties and methods
         */
        get: function () {
            return this._calcToSides1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "calcToSides2", {
        get: function () {
            return this._calcToSides2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "calcToSides3", {
        get: function () {
            return this._calcToSides3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "draw", {
        get: function () {
            return this._draw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "sides", {
        get: function () {
            return this._sides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "angles", {
        get: function () {
            return this._angles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "vertex", {
        get: function () {
            return this._vertexes;
        },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}(Shape));
export { Triangle };
