function solve(n) {
    let numbers = [0, 1];
    let fibonacci = (function () {
        let index = 2;
        return function () {
            numbers.push(numbers[index - 1] + numbers[index - 2]);
            index++;
        }
    })();

    for(let i = 0; i < n - 1; i++) {
        fibonacci()
    }

    return numbers.slice(1)
}