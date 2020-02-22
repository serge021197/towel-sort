// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length == 0) {
        return [];
    }
    let arr = matrix.map((array, index) => index % 2 === 0 ? array : array.reverse())
    return arr.reduce((acc, val) => acc.concat(val), [])
}
