import { ShapeParams } from "../interfaces/shape.js";
import { Shape } from "./shape.js";
import { Formulas } from "../math/formulas.js";
import { CalcProp } from "../interfaces/rectangle.js";
import { incorrect } from "../errors/incorrect.js";
import { Coords } from "../interfaces/vertexes.js";
import { shapeDrawer } from "../drawing/shapeDrawer.js";

/**
 * Triangle class contains methods and properties for working with a rectangle
 * sides - array numbers
 * vertexes - array objects
 * @param *shape params from interfaces
 */
export class Rectangle extends Shape {
	private _sides: number[] = [0, 0, 0, 0];
	private _vertexes: Coords[] = [];

	constructor(params: ShapeParams) {
		const { x, y, rotate } = params;
		super(x, y, rotate);
		this._vertexes[0] = { x: x, y: y };
	}

	/**
	 * Method of calculation of parameters
	 */

	private _calculate(props: CalcProp): void {
		incorrect(props);
		const { width, height } = props;
		this._sides = [height, width, height, width];
		this.calcValues();
	}

	private calcValues(): void {
		this._perimeter = Formulas.calcPerimeter(this._sides);
		this._area = this._sides[0] * this._sides[1];
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
					angle: this._rotate + Math.PI / 2,
					step: step,
					context: context,
				};
				return shapeDrawer(paramForDrawing);
			})
			.then(() => {
				this._vertexes[2] = Formulas.getCoords(
					this._vertexes[1].x,
					this._vertexes[1].y,
					this._rotate + Math.PI / 2,
					this.sides[1]
				);
				paramForDrawing = {
					x: this._vertexes[2].x,
					y: this._vertexes[2].y,
					length: this.sides[2],
					angle: this._rotate + Math.PI,
					step: step,
					context: context,
				};
				return shapeDrawer(paramForDrawing);
			})
			.then(() => {
				this._vertexes[3] = Formulas.getCoords(
					this._vertexes[2].x,
					this._vertexes[2].y,
					this._rotate + Math.PI,
					this.sides[2]
				);
				paramForDrawing = {
					x: this._vertexes[3].x,
					y: this._vertexes[3].y,
					length: this.sides[3],
					angle: this._rotate + Math.PI * 1.5,
					step: step,
					context: context,
				};
				return shapeDrawer(paramForDrawing);
			});
	}

	/**
	 * Getters return private properties and methods
	 */
	public get calculate() {
		return this._calculate;
	}
	public get draw() {
		return this._draw;
	}
	public get sides() {
		return this._sides;
	}
}
