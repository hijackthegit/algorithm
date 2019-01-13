const HashMap = require('../DataStructure/HashMap');

describe('HashMap', () => {
    it('should create hashmap', () => {
        const hashmap = new HashMap({});
        expect(typeof hashmap.size).toBe('function');
        expect(hashmap.collection).toStrictEqual({});
        expect(hashmap.size()).toBe(0);
    });
    it('should set correct value into collection', () => {
        const hashmap = new HashMap();
        hashmap.set('key1', 'val1');
        expect(hashmap.get('key1')).toBe('val1');
    });
});