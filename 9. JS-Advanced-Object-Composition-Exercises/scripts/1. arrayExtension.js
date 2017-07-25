(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let arr = [];
        for(let i = 0; i < this.length; i++) {
            if(i > n - 1){
                arr.push(this[i])
            }
        }

        return arr;
    };
    Array.prototype.take = function (n) {
        let arr = [];
        for(let i = 0; i < n; i++) {
            arr.push(this[i])
        }

        return arr;
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };

})()