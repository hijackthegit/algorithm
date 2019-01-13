class Fibonacci {
    constructor(i) {
        this.value = this.__createNumber(i);
    }
    val() {
        return this.value;
    }
    __createNumber(i) {
        if (i === 0 || i === 1) return i;
        return this.__createNumber(i-1) + this.__createNumber(i-2);
    }
}

module.exports = Fibonacci;