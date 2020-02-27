
module.exports = function towelSort (matrix) {
    if (typeof matrix === "undefined") {
        return [];
    }
    for ( let i = 1; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
    }
    return [].concat(...matrix);
}
