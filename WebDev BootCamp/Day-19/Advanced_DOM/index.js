// Higher order function

function add (num1, num2) {
    return num1 + num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function power (num1, num2) {
    return num1 ** num2;
}

function operator(num1, num2, operation){
    return operation(num1, num2);
}

// Objects 

let bellboy1 = {
    name: "Bellboy",
    age: 25,
    gender: "Male",
    hasWorkPermit : true,
    languages: ["English", "Spanish"],
}

// Constructor function

function Bellboy(name, age, gender, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

