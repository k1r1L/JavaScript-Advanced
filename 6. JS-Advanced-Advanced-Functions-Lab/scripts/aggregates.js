function solve(numArr) {

    console.log(`Sum = ${reduce(numArr, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(numArr, (a, b) => Math.min(a, b))}`);
    console.log(`Max = ${reduce(numArr, (a, b) => Math.max(a, b))}`);
    console.log(`Product = ${reduce(numArr, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(numArr, (a, b) => a.toString() + b)}`);

    function reduce(numArr, func) {
        let result = numArr[0];
        for (let el of numArr.slice(1)) {
            result = func(result, el);
        }

        return result;
    }
}