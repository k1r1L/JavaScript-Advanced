function solve(arr, criteria) {
    let criterias = {
        'asc': (a, b) => a - b, //ascending
        'desc': (a, b) => b - a //descending
    };

    return arr.sort(criterias[criteria]);
}

