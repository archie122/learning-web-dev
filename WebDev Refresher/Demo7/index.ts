// console.log("Hello via Bun!");

// Promise Example

const p3 = function (city : string, country : string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (city == 'London') {
                resolve(city + ' ' + country)
            } else {
                reject('Error')
            }
        }, 2000)
    })
}

p3('Calgary', 'Canada')
    .then(city => console.log(city))
    .catch(err => console.log(err))

// Async Await Example 1

async function name(you: any) {
    return "Hello " + you ;
}

name('Archie')
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Async Await Example 2

async function foo () {
    try {
        const data = await p3('London', 'Canada')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

foo()