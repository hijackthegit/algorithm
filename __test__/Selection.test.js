const SelectionSort = require('../Sort/Selection');

describe('Selection sort', () => {
    beforeEach(() => {
        this.mock = {
            array: [1, 3, 6, 32, 6, 3, 7, 8, 4],
            asc: [1, 3, 3, 4, 6, 6, 7, 8, 32],
            desc: [32, 8, 7, 6, 6, 4, 3, 3, 1],
        }
    });
    it('find the smallest item in an array', () => {
        const sortResult = SelectionSort(this.mock.array, 1);
        expect(sortResult).toEqual(this.mock.asc);
    });
    it('find the biggest item in an array', () => {
        const sortResult = SelectionSort(this.mock.array, -1);
        expect(sortResult).toEqual(this.mock.desc);
    });
});