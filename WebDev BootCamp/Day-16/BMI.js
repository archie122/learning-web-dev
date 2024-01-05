function bmi_calculator(weight, height){
    let bmi = weight / (height * height);
    return Math.round(bmi);
}

console.log(bmi_calculator(65, 1.8));