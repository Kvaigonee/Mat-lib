import { Formulas } from "../math/formulas.js";

interface Params {
	x: number;
	y: number;
	length: number;
	angle: number;
	step: number;
	context: CanvasRenderingContext2D;
}

export const shapeDrawer = async (params: Params) => {
	const { x, y, length, angle, step, context } = params;
	const iterate: number = length / step;
	let temp: number = iterate;
	context.lineTo(x, y);

	const drawLine = () => {
		const coords = Formulas.getCoords(x, y, angle, temp);
		context.strokeStyle = "red";
		context.lineTo(coords.x, coords.y);
		context.stroke();
	};

	while (temp <= length) {
		const drawingPromise = new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve(drawLine());
			}, 100);
		});

		await drawingPromise;
		temp += iterate;
	}
};
