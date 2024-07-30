import { throttle } from './throttle';

 function createMockFunction() {
     const mockFunc = jest.fn();
     return mockFunc;
 }
 
describe('throttle', () => {
    test("should be a function ", () =>{
        expect(typeof throttle).toBe("function")
        });
 
    test('the function is excecuted inside the throttle immediately', () => {
         const mockFunc = createMockFunction();
         const throttledFunc = throttle(mockFunc, 1000);
  
         throttledFunc();
         expect(mockFunc).toHaveBeenCalledTimes(1);
    });
});
