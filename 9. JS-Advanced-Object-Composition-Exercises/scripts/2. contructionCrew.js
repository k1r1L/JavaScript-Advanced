function solve(obj) {
    if(obj.handsShaking){
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
    }

    return obj;
}