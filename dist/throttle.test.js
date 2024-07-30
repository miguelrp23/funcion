"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle_1 = require("./throttle");
function createMockFunction() {
    const mockFunc = jest.fn();
    return mockFunc;
}
describe('throttle', () => {
    test("should be a function ", () => {
        expect(typeof throttle_1.throttle).toBe("function");
    });
    test('the function is excecuted inside the throttle immediately', () => {
        const mockFunc = createMockFunction();
        const throttledFunc = (0, throttle_1.throttle)(mockFunc, 1000);
        throttledFunc();
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=throttle.test.js.map