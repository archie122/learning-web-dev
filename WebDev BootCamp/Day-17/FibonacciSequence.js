function fib(length){
    let list = [];
    let x = 0;
    let y = 1;
    let z = 1;
    
    for (let i = 0; i < length; i++) {
        list.push(x);
        x = y;
        y = z;
        z = x + y;
    }

    return list;
}

console.log(fib(15));