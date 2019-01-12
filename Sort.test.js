const Sort = require('./Sort');

describe('Sort', () => {
    beforeEach(() => {
        this.mock = {
            array: [1,3,6,32,6,3,7,8,4],
            asc: [ 1, 3, 3, 4, 6, 6, 7, 8, 32 ],
            desc: [ 32, 8, 7, 6, 6, 4, 3, 3, 1 ],
        }
    });
    describe('Bubble sort', () => {
        it('find the smallest item in an array', () => {
           const sortResult = Sort.bubble(this.mock.array, 1);
           expect(sortResult).toEqual(this.mock.asc);
        });
        it('find the biggest item in an array', () => {
           const sortResult = Sort.bubble(this.mock.array, -1);
           expect(sortResult).toEqual(this.mock.desc);
        });

    });
    describe('Selection sort', () => {
        it('find the smallest item in an array', () => {
           const sortResult = Sort.selection(this.mock.array, 1);
           expect(sortResult).toEqual(this.mock.asc);
        });
        it('find the biggest item in an array', () => {
           const sortResult = Sort.selection(this.mock.array, -1);
           expect(sortResult).toEqual(this.mock.desc);
        });

    });
});