const Fibonacci = require('../Maths/Fibonacci');

describe('Maths', () => {
    beforeEach(() => {
        this.mock = {
            fibonacciSeries: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811],
        };
    });
    it('10 fibonacci numbers testing', () => {
        let generatedFibonacci = [];
        for (let i = 0; i < 10; i++) {
            generatedFibonacci.push((new Fibonacci(i).val()));
        }
        const mock = this.mock.fibonacciSeries.splice(0, generatedFibonacci.length);
        expect(generatedFibonacci).toEqual(mock);
    });
});