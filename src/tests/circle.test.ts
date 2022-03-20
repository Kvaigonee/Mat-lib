import { Geometric } from "../main";

describe("Calculation of circle parameters", () => {
	const geom = new Geometric({ x: 10, y: 10, rotate: Math.PI });
	const circle = geom.createCircle();

	test("Calculation by radius", () => {
		circle.calculate(123);
		expect(Math.floor(circle.perimeter)).toBe(772);
		expect(Math.floor(circle.area)).toBe(47529);
		expect(circle.diameter).toBe(246);
	});
});
