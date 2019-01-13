module.exports = (arr, order = 1) => {
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
};
