export function incorrect(params) {
    if (typeof params !== "object") {
        if (typeof params !== "number") {
            throw new Error("Expected number");
        }
        if (params <= 0) {
            throw new Error("Expected value more than 0");
        }
        return;
    }
    for (var key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            if (typeof params[key] !== "number") {
                throw new Error("Expected number");
            }
            if (params[key] <= 0 && key !== "rotate") {
                throw new Error("Expected value more than 0");
            }
        }
    }
}
