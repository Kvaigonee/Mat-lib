import { ShapeParams } from "../interfaces/shape.js";
import { Shape } from "./shape.js";
import { incorrect } from "../errors/incorrect.js";
import { Formulas } from "../math/formulas.js";

/**
 * Triangle class contains methods and properties for working with a circle
 * _diameter - number
 * _radius number
 * @param *shape params from interfaces
 */
export class Circle extends Shape {
	private _diameter = 0;
	private _radius = 0;

	constructor(params: ShapeParams) {
		const { x, y, rotate } = params;
		super(x, y, rotate);
	}

	/**
	 * Method of calculation of parameters
	 */
	private _calculate(radius: number): void {
		incorrect(radius);
		this._radius = radius;
		this._diameter = this._radius * 2;
		this.calcValues();
	}

	private calcValues(): void {
		this._perimeter = Math.PI * this._diameter;
		this._area = Math.PI * this._radius ** 2;
	}

	/**
	 * Мethod draws a shape with animation
	 */
	private _draw(context: CanvasRenderingContext2D, step: number): void {
		/**
		 * Using Promise for asynchronous rendering
		 */
		(async () => {
			const iterate: number = (Math.PI * 2) / step;
			let temp: number = iterate;
			const startCoords = Formulas.getCoords(this._x, this._y, 0, this.radius);
			context.lineTo(startCoords.x, startCoords.y);

			const drawLine = () => {
				const coords = Formulas.getCoords(this._x, this._y, temp, this.radius);
				context.strokeStyle = "red";
				context.lineTo(coords.x, coords.y);
				context.stroke();
			};

			while (temp <= Math.PI * 2) {
				const drawingPromise = new Promise<void>((resolve) => {
					setTimeout(() => {
						resolve(drawLine());
					}, 10);
				});

				await drawingPromise;
				temp += iterate;
			}
		})();
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

	public get radius() {
		return this._radius;
	}
	public get diameter() {
		return this._diameter;
	}
}
