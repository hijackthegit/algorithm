const PascalTriangle = require('../Maths/PascalTriangle');
describe('PascalTriangle Test', () => {
    let mockPascalTriangle = [];
    beforeAll(() => {
        mockPascalTriangle = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1],
            [1, 7, 21, 35, 35, 21, 7, 1],
        ];
    });
    it('should create a Pascal Triangle', () => {
        let n = 5;
        if (n > mockPascalTriangle) {
            n = mockPascalTriangle.length;
        }
        const pt = new PascalTriangle(n);
        expect(pt.data).toEqual(mockPascalTriangle.slice(0, n));
        expect(pt.rows).toBe(5);
    });
});