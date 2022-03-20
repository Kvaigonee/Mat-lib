import { Coords } from "../interfaces/vertexes.js";

/**
 * General mathematical methods
 */
export class Formulas {
	static vectorLength(x1: number, y1: number, x2: number, y2: number): number {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	}

	static calcPerimeter(sides: number[]): number {
		return sides.reduce((result: number, side: number) => result + side);
	}

	static calcAreaTriangle(perimeter: number, a: number, b: number, c: number): number {
		const p = perimeter / 2;
		return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	}

	static calcThirdAngle(angle1: number, angle2: number): number {
		return Math.PI - (angle1 + angle2);
	}

	static calcAngleBySides(side1: number, side2: number, side3: number): number {
		return Math.acos(
			(Math.pow(side1, 2) + Math.pow(side2, 2) - Math.pow(side3, 2)) / (2 * side1 * side2)
		);
	}

	static getCoords(x: number, y: number, angle: number, length: number): Coords {
		return {
			x: x + Math.cos(angle) * length,
			y: y + Math.sin(angle) * length,
		};
	}
}
