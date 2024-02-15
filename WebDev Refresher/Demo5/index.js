import { sayHello, Card } from "./file1";

sayHello();

String.prototype.sayGoodBye = function () {
    console.log("Good By!!!");
}

"Hello".sayGoodBye()

let card = new Card("Hello", "World")

Card.prototype.sayHat = function () {
    console.log("Hat");
}

card.sayHat()
console.log(card.title);
console.log(card.content);