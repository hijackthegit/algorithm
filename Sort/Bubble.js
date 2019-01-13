module.exports = (arr, order = 1) =>{
    if (!Array.isArray(arr)) {
        return arr;
    }
    const len = arr.length;
    if (order > 0) {
        // ascendant
        for (let i = 0; i < len; i++) {
            for (let j = len - 1; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                }
            }
        }
    } else {
        // descendant
        for (let i = 0; i < len; i++) {
            for (let j = len - 1; j > 0; j--) {
                if (arr[j] > arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
        }
    }
    return arr;
};