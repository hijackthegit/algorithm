const HashMap = require('../DataStructure/HashMap');

describe('HashMap', () => {
    const hashmap = new HashMap({});
    beforeEach(() => {
        hashmap.clear();
    });
    it('should create hashmap', () => {
        expect(typeof hashmap.size).toBe('function');
        expect(hashmap.collection).toStrictEqual({});
        expect(hashmap.size()).toBe(0);
    });
    it('should set correct value into collection', () => {
        hashmap.set('key1', 'val1');
        expect(hashmap.get('key1')).toBe('val1');
    });
    it('should check if hashmap contains a key', () => {
        hashmap.set('key1', 'val1');
        expect(hashmap.hasKey('key1')).toBeTruthy();
    });
    it('should return true if hashmap is empty', () => {
        hashmap.set('key1', 'val1');
        expect(hashmap.isEmpty()).toBeTruthy();
    });
    it('should return true if hashmap is empty', () => {
        hashmap.set('key1', 'val1');
        expect(hashmap.isEmpty()).toBeTruthy();
    });
    it('should set collection with correct value', () => {
        hashmap.collection = {
            key1: 1,
            key2: 2,
            key3: 3,
        };
        expect(hashmap.size()).toBe(3);
        expect(hashmap.collection).toEqual({
            key1: 1,
            key2: 2,
            key3: 3,
        });
    });
    it('should remove a key when calling remove', () => {
        hashmap.collection = {
            key1: 1,
            key2: 2,
            key3: 3,
        };
        expect(hashmap.hasKey('key2')).toBeTruthy();
        hashmap.remove('key2');
        expect(hashmap.collection).toEqual({
            key1: 1,
            key3: 3,
        });
    });
});