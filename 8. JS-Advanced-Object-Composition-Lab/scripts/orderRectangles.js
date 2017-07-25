function solve(arr) {
    let objArr = [];
    for(let [width, height] of arr) {
       objArr.push({
           width: width,
           height: height,
           area: function () {
               return this.width * this.height;
           },
           compareTo: function (other) {
               let compare = other.area() - this.area();
               return compare || (other.width - this.width);
           }
       })
    }

    return objArr.sort((a, b) => a.compareTo(b))
}