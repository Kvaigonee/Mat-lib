import { Rectangle } from "./lib/shapes/rectangle.js";
import { Circle } from "./lib/shapes/circle.js";
import { ShapeParams } from "./lib/interfaces/shape.js";
import { Triangle } from "./lib/shapes/triangle.js";
import { incorrect } from "./lib/errors/incorrect.js";

/**
 * Geometric class contains methods for creating geometric shapes
 * @param сoordinates - {x: number, y: number}
 */
export class Geometric {
	constructor(protected params: ShapeParams) {
		incorrect(params);
		this.params = params;
	}

	private _createTringle() {
		return new Triangle(this.params);
	}
	private _createRectangle() {
		return new Rectangle(this.params);
	}
	private _createCircle() {
		return new Circle(this.params);
	}

	/**
	 * The methods return an instance of the geometric shape class
	 * @returns new Class
	 */

	public get createTringle() {
		return this._createTringle;
	}
	public get createRectangle() {
		return this._createRectangle;
	}
	public get createCircle() {
		return this._createCircle;
	}
}
