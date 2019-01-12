const { Sort, DataStructure } = require('./index');

describe('Algorithm', () => {
    beforeAll(() => {
        this.mock = {
            array: [1,3,6,32,6,3,7,8,4],
        }
    });
    describe('Sort', () => {
        describe('bubble sort', () => {
            it('bubble sort is a function', () => {
                expect(typeof Sort.bubble).toBe('function');
            });
            it('find the smallest item in an array', () => {
               const smallest = Math.min(...this.mock.array);
               const sortResult = Sort.bubble(this.mock.array, 1);
               expect(sortResult[0]).toBe(smallest);
            });
            it('find the biggest item in an array', () => {
               const biggest = Math.max(...this.mock.array);
               const sortResult = Sort.bubble(this.mock.array, -1);
               expect(sortResult[0]).toBe(biggest);
            });

        });
    });
});