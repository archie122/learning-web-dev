function whosPaying(names) {
    let size = names.length;
    let pick = Math.floor(Math.random() * size);
    console.log(names[pick] + " is going to buy lunch today!")
}

whosPaying(["John", "Jane", "Mark"]);