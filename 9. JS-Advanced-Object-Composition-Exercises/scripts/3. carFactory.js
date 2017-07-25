function solve(obj) {
    let wheels = nearestOddWheelsize();
    let [power, volume] = engineInfo();
    let car = {
        model: obj.model,
        engine: {
            power: power,
            volume: volume
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: [wheels, wheels, wheels, wheels]
    };

    return car;

    function engineInfo() {
        let smallEngine = Math.abs(obj.power - 90);
        let normalEngine = Math.abs(obj.power - 120);
        let monsterEngine = Math.abs(obj.power - 200);
        let smallestVal = Math.min(smallEngine, normalEngine, monsterEngine);
        if(smallestVal === smallEngine){
            return [90, 1800];
        } else if(smallestVal === normalEngine){
            return [120, 2400];
        } else {
            return [200, 3500];
        }
    }

    function nearestOddWheelsize() {
        let roundedDown = Math.floor(obj.wheelsize);
        return roundedDown % 2 !== 0
            ? roundedDown
            : roundedDown - 1;
    }
}