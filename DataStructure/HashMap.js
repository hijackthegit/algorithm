class HashMap {
    constructor(collection = {}) {
        this._collection = collection;
    }

    get(key) {
        return this._collection.hasOwnProperty(key) && this._collection[key] || null;
    }
    set(key, val) {
        this._collection[key] = val;
    }
    hasKey(key) {
        return this._collection.hasOwnProperty(key);
    }
    remove(key) {
        if (this._collection.hasOwnProperty(key)) {
            this._collection[key] = null;
            delete this._collection[key];
            return true;
        }
        return false;
    }
    clear() {
        this._collection = {};
    }
    isEmpty() {
        return Object.keys(this._collection).length > 0;
    }
    get collection() {
        return this._collection;
    }
    set collection(val) {
        this._collection = val;
    }

    size() {
        return Object.keys(this._collection).length;
    }
}

module.exports = HashMap;