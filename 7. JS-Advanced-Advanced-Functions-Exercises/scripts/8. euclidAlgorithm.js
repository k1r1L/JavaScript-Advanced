function solve(numA, numB) {
    if(numA === 0){
        return numB;
    }

    if(numB === 0){
        return numA;
    }

    return solve(numB, numA % numB);
}
