let name1 = prompt("What is your name? : ")
let name2 = prompt("What is your crush's name? : ")

let chance = Math.floor(Math.random() * 100) + 1;


if (chance > 70) {
    alert("You love each other like Kanye loves Kanye")
} 

if (chance > 30 && chance < 70) {
    alert("Your love score is " + chance + "%") 
}

if (chance < 30) {
    alert("You don't love each other like Kanye loves Kanye")
}
