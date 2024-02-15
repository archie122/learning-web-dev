// Promise Example 1

const p1 = function (num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num)
        } else {
            reject('Error')
        }
    })
}

p1(20)
    .then(num => console.log(num))
    .catch(err => console.log(err))

// Promise Example 2

const p2 = function (name, num) {
    return new Promise((resolve, reject) => {
        if (name == 'comp') {
            resolve(name + ' ' + num)
        } else {
            reject('Error')
        }
    })
}

p2('mgmt', 20)
    .then(name => console.log(name))
    .catch(err => console.log(err))

// Promise Example 3

const p3 = function (city, country) {
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