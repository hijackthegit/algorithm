const DataStructure = require('./DataStructure');
beforeAll(() => {

});

describe('DataStructure', () => {
    it('hashmap is a function', () => {
        expect(typeof DataStructure.hashTable).toBe('function');
    });
});