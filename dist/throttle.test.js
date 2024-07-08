"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle_1 = require("./throttle");
function createMockFunction() {
    const mockFunc = jest.fn();
    return mockFunc;
}
describe('throttle', () => {
    it('debe ejecutar la función inmediatamente en la primera llamada', () => {
        const mockFunc = createMockFunction();
        const throttledFunc = (0, throttle_1.throttle)(mockFunc, 1000);
        throttledFunc();
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });
    it('debe ignorar llamadas sucesivas dentro del límite de tiempo', () => {
        const mockFunc = createMockFunction();
        const throttledFunc = (0, throttle_1.throttle)(mockFunc, 1000);
        throttledFunc();
        throttledFunc();
        throttledFunc();
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });
    it('debe ejecutar la función nuevamente después del límite de tiempo', (done) => {
        const mockFunc = createMockFunction();
        const throttledFunc = (0, throttle_1.throttle)(mockFunc, 1000);
        throttledFunc();
        setTimeout(() => {
            throttledFunc();
            expect(mockFunc).toHaveBeenCalledTimes(2);
            done();
        }, 1500);
    });
});
//# sourceMappingURL=throttle.test.js.map