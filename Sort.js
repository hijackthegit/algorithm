class Sort {
    static bubble(arr, order = 1) {
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
    }

    static selection(arr, order = 1) {
        if (!Array.isArray(arr)) {
            return arr;
        }
        const len = arr.length;
        let temp = arr;
        const sortedArr = [];
        if (order > 0) {
            for (let i = 0; i < len; i++) {
                let min = Math.min(...temp);
                sortedArr.push(min);
                const idx = temp.indexOf(min);
                (idx !== -1) && temp.splice(idx, 1);
            }
        } else {
            for (let i = 0; i < len; i++) {
                let max = Math.max(...temp);
                sortedArr.push(max);
                const idx = temp.indexOf(max);
                (idx !== -1) && temp.splice(idx, 1);
            }
        }
        return sortedArr;
    }

    static insertion(arr, order = 1) {
        if (!Array.isArray(arr)) {
            return arr;
        }


    }

    static heap(arr, order = 1) {
        if (!Array.isArray(arr)) {
            return arr;
        }

    }

    static merge(arr, order = 1) {
        if (!Array.isArray(arr)) {
            return arr;
        }

    }

    static quick(arr, order = 1) {
        if (!Array.isArray(arr)) {
            return arr;
        }

    }
}

module.exports = Sort;
