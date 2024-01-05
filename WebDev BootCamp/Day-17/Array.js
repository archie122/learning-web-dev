let guessList = ["Angela", "James", "Hermione", "Mary", "Jack", "Archie", "Robert"];
let new_name = prompt("What is your name? : ");

if (guessList.includes(new_name)) {
    console.log("You are on the list");
} else {
    console.log("You are not in the list");
}