const BubbleSort = require('../Sort/Bubble');

describe('Bubble sort', () => {
    beforeEach(() => {
        this.mock = {
            array: [1, 3, 6, 32, 6, 3, 7, 8, 4],
            asc: [1, 3, 3, 4, 6, 6, 7, 8, 32],
            desc: [32, 8, 7, 6, 6, 4, 3, 3, 1],
        }
    });
    it('should return null if input is not an array', () => {
        const sortResult = BubbleSort('');
        expect(sortResult).toBe('');
    });
    it('find the smallest item in an array', () => {
        const sortResult = BubbleSort(this.mock.array, 1);
        expect(sortResult).toEqual(this.mock.asc);
    });
    it('find the biggest item in an array', () => {
        const sortResult = BubbleSort(this.mock.array, -1);
        expect(sortResult).toEqual(this.mock.desc);
    });
});