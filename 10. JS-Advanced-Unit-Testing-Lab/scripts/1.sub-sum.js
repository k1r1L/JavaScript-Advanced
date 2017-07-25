function subsum(arr, startIndex, endIndex) {
    Array.prototype.sum = function () {
        let sum = 0;
        for(let i = 0; i < this.length; i++) {
            sum += this[i];
        }

        return sum;
    };
    if(!Array.isArray(arr)){
        return NaN;
    }
    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(arr.length - 1, endIndex);
    return arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .sum();
}