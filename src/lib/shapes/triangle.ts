import { Shape } from "./shape.js";
import { ShapeParams } from "../interfaces/shape.js";
import { CalcToSides1, CalcToSides2, CalcToSides3 } from "../interfaces/triangle.js";
import { Formulas } from "../math/formulas.js";
import { incorrect } from "../errors/incorrect.js";
import { Coords } from "../interfaces/vertexes.js";
import { shapeDrawer } from "../drawing/shapeDrawer.js";

/**
 * Triangle class contains methods and properties for working with a triangle
 * sides - array numbers
 * angles - array numbers
 * vertexes - array objects
 * @param *shape params from interfaces
 */
export class Triangle extends Shape {
	private _sides: number[] = [0, 0, 0];
	private _angles: number[] = [0, 0, 0];
	private _vertexes: Coords[] = [];

	constructor(params: ShapeParams) {
		const { x, y, rotate } = params;
		super(x, y, rotate);
		this._vertexes[0] = { x: x, y: y };
	}

	/**
	 * Сalculation of a triangle on two sides and an angle
	 */
	private _calcToSides1(params: CalcToSides1): void {
		incorrect(params);
		const { side1, side2, angle1 } = params;

		this._sides[0] = side1;
		this._sides[1] = side2;
		this._sides[2] = Math.sqrt(
			Math.pow(side1, 2) + Math.pow(side2, 2) - 2 * side1 * side2 * Math.cos(angle1)
		);

		this._angles[0] = angle1;
		this._angles[1] = Formulas.calcAngleBySides(this._sides[0], this._sides[2], this._sides[1]);
		this._angles[2] = Formulas.calcThirdAngle(this._angles[0], this._angles[1]);

		this.calcValues();
	}

	/**
	 * Сalculation of a triangle by side and two angles
	 */
	private _calcToSides2(params: CalcToSides2): void {
		incorrect(params);
		const { side1, angle1, angle2 } = params;

		this._angles[0] = angle1;
		this._angles[1] = angle2;
		this._angles[2] = Formulas.calcThirdAngle(angle1, angle2);

		this._sides[0] = side1;
		this._sides[1] = (side1 * Math.sin(angle2)) / Math.sin(this._angles[2]);
		this._sides[2] = (side1 * Math.sin(angle1)) / Math.sin(this._angles[2]);

		this.calcValues();
	}

	/**
	 * calculation of a triangle on three sides
	 */
	private _calcToSides3(params: CalcToSides3): void {
		incorrect(params);
		const { side1, side2, side3 } = params;

		this._sides[0] = side1;
		this._sides[1] = side2;
		this._sides[2] = side3;

		this._angles[0] = Formulas.calcAngleBySides(this._sides[0], this._sides[1], this._sides[2]);
		this._angles[1] = Formulas.calcAngleBySides(this._sides[0], this._sides[2], this._sides[1]);
		this._angles[2] = Formulas.calcThirdAngle(this._angles[0], this._angles[1]);

		this.calcValues();
	}

	/**
	 * Method calculates the main parameters
	 */
	private calcValues(): void {
		this._perimeter = Formulas.calcPerimeter(this._sides);
		this._area = Formulas.calcAreaTriangle(
			this.perimeter,
			this._sides[0],
			this._sides[1],
			this._sides[2]
		);
	}

	/**
	 * Мethod draws a shape with animation
	 */
	private _draw(context: CanvasRenderingContext2D, step: number): void {
		let paramForDrawing = {
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
			.then(() => {
				this._vertexes[1] = Formulas.getCoords(this._x, this._y, this._rotate, this.sides[0]);
				paramForDrawing = {
					x: this._vertexes[1].x,
					y: this._vertexes[1].y,
					length: this.sides[1],
					angle: this._rotate + (Math.PI - this._angles[0]),
					step: step,
					context: context,
				};
				return shapeDrawer(paramForDrawing);
			})
			.then(() => {
				this._vertexes[2] = Formulas.getCoords(
					this._vertexes[1].x,
					this._vertexes[1].y,
					this._rotate + (Math.PI - this._angles[0]),
					this.sides[1]
				);
				paramForDrawing = {
					x: this._vertexes[2].x,
					y: this._vertexes[2].y,
					length: this.sides[2],
					angle: this._rotate + (Math.PI + this._angles[1]),
					step: step,
					context: context,
				};
				shapeDrawer(paramForDrawing);
			});
	}

	/**
	 * Getters return private properties and methods
	 */
	public get calcToSides1() {
		return this._calcToSides1;
	}
	public get calcToSides2() {
		return this._calcToSides2;
	}
	public get calcToSides3() {
		return this._calcToSides3;
	}
	public get draw() {
		return this._draw;
	}

	public get sides() {
		return this._sides;
	}
	public get angles() {
		return this._angles;
	}
	public get vertex() {
		return this._vertexes;
	}
}
