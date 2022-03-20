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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Shape } from "./shape.js";
import { incorrect } from "../errors/incorrect.js";
import { Formulas } from "../math/formulas.js";
/**
 * Triangle class contains methods and properties for working with a circle
 * _diameter - number
 * _radius number
 * @param *shape params from interfaces
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(params) {
        var _this = this;
        var x = params.x, y = params.y, rotate = params.rotate;
        _this = _super.call(this, x, y, rotate) || this;
        _this._diameter = 0;
        _this._radius = 0;
        return _this;
    }
    /**
     * Method of calculation of parameters
     */
    Circle.prototype._calculate = function (radius) {
        incorrect(radius);
        this._radius = radius;
        this._diameter = this._radius * 2;
        this.calcValues();
    };
    Circle.prototype.calcValues = function () {
        this._perimeter = Math.PI * this._diameter;
        this._area = Math.PI * Math.pow(this._radius, 2);
    };
    /**
     * Мethod draws a shape with animation
     */
    Circle.prototype._draw = function (context, step) {
        var _this = this;
        /**
         * Using Promise for asynchronous rendering
         */
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var iterate, temp, startCoords, drawLine, drawingPromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        iterate = (Math.PI * 2) / step;
                        temp = iterate;
                        startCoords = Formulas.getCoords(this._x, this._y, 0, this.radius);
                        context.lineTo(startCoords.x, startCoords.y);
                        drawLine = function () {
                            var coords = Formulas.getCoords(_this._x, _this._y, temp, _this.radius);
                            context.strokeStyle = "red";
                            context.lineTo(coords.x, coords.y);
                            context.stroke();
                        };
                        _a.label = 1;
                    case 1:
                        if (!(temp <= Math.PI * 2)) return [3 /*break*/, 3];
                        drawingPromise = new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(drawLine());
                            }, 10);
                        });
                        return [4 /*yield*/, drawingPromise];
                    case 2:
                        _a.sent();
                        temp += iterate;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    };
    Object.defineProperty(Circle.prototype, "calculate", {
        /**
         * Getters return private properties and methods
         */
        get: function () {
            return this._calculate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "draw", {
        get: function () {
            return this._draw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}(Shape));
export { Circle };
