function solve() {
    function getStatus() {
        if(bmi < 18.5){
            return 'underweight';
        } else if(bmi < 25){
            return 'normal';
        } else if(bmi < 30){
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    let [name, age, weight, height] = arguments;
    let heightInM = height / 100;
    let bmi = weight / Math.pow(heightInM, 2);
    let status = getStatus();
    let evaluation = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: status
    };

    if(status === 'obese'){
        evaluation.recommendation = 'admission required';
    }

    return evaluation;
}
