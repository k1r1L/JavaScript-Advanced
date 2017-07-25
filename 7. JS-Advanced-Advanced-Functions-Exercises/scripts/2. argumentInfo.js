function solve() {
    let typesCount = new Map;

    for(let arg of arguments) {
        let type = typeof arg;
        if(!typesCount.has(type)){
            typesCount.set(type, 0);
        }

        let oldValue = typesCount.get(type);
        typesCount.set(type, oldValue + 1);
        console.log(`${type}: ${arg}`);
    }

    [...typesCount]
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => console.log(`${entry[0]} = ${entry[1]}`))
}

