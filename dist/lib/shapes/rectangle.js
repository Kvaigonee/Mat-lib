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
 * Triangle class contains methods and properties for working with a rectangle
 * sides - array numbers
 * vertexes - array objects
 * @param *shape params from interfaces
 */
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(params) {
        var _this = this;
        var x = params.x, y = params.y, rotate = params.rotate;
        _this = _super.call(this, x, y, rotate) || this;
        _this._sides = [0, 0, 0, 0];
        _this._vertexes = [];
        _this._vertexes[0] = { x: x, y: y };
        return _this;
    }
    /**
     * Method of calculation of parameters
     */
    Rectangle.prototype._calculate = function (props) {
        incorrect(props);
        var width = props.width, height = props.height;
        this._sides = [height, width, height, width];
        this.calcValues();
    };
    Rectangle.prototype.calcValues = function () {
        this._perimeter = Formulas.calcPerimeter(this._sides);
        this._area = this._sides[0] * this._sides[1];
    };
    /**
     * Мethod draws a shape with animation
     */
    Rectangle.prototype._draw = function (context, step) {
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
                angle: _this._rotate + Math.PI / 2,
                step: step,
                context: context,
            };
            return shapeDrawer(paramForDrawing);
        })
            .then(function () {
            _this._vertexes[2] = Formulas.getCoords(_this._vertexes[1].x, _this._vertexes[1].y, _this._rotate + Math.PI / 2, _this.sides[1]);
            paramForDrawing = {
                x: _this._vertexes[2].x,
                y: _this._vertexes[2].y,
                length: _this.sides[2],
                angle: _this._rotate + Math.PI,
                step: step,
                context: context,
            };
            return shapeDrawer(paramForDrawing);
        })
            .then(function () {
            _this._vertexes[3] = Formulas.getCoords(_this._vertexes[2].x, _this._vertexes[2].y, _this._rotate + Math.PI, _this.sides[2]);
            paramForDrawing = {
                x: _this._vertexes[3].x,
                y: _this._vertexes[3].y,
                length: _this.sides[3],
                angle: _this._rotate + Math.PI * 1.5,
                step: step,
                context: context,
            };
            return shapeDrawer(paramForDrawing);
        });
    };
    Object.defineProperty(Rectangle.prototype, "calculate", {
        /**
         * Getters return private properties and methods
         */
        get: function () {
            return this._calculate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "draw", {
        get: function () {
            return this._draw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "sides", {
        get: function () {
            return this._sides;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}(Shape));
export { Rectangle };
