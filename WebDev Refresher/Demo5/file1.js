import { Person } from './file2'

function sayHello() {
    console.log("Hello!!!");
}

function Card (title, content) {
    this.title = title
    this.content = content
}


class Jack extends Person {
    constructor(name, age, country) {
        super(name, age)
        this.country = country
    }

    output () {
        console.log(this.name, this.age, this.country)
    }
}



export { sayHello, Card , Jack }