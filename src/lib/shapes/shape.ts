import { Formulas } from "../math/formulas.js";

/**
 * Shape class contains general properties and methods of shapes
 * @param сoordinates and shape rotation - x: number, y: number, rotate: number
 */
export class Shape {
	protected _x: number;
	protected _y: number;
	protected _perimeter = 0;
	protected _area = 0;
	protected _rotate = 0;

	constructor(x: number, y: number, rotate: number) {
		this._x = x;
		this._y = y;
		this._rotate = rotate;
	}

	private _distanceToPoint(x: number, y: number): number {
		return Formulas.vectorLength(x, y, this.x, this.y);
	}

	/**
	 * Getters return private properties and methods
	 * @return returns the distance to a point in space, perimeter, area, and coordinates
	 */
	public get distanceToPoint() {
		return this._distanceToPoint;
	}
	public get perimeter() {
		return this._perimeter;
	}
	public get area() {
		return this._area;
	}
	public get x() {
		return this._x;
	}
	public get y() {
		return this._y;
	}
}
