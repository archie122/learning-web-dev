function beer(){
    count = 99

    while (count > -1) {
        oneLess = count - 1

        if (count > 1) {
            console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.`);
            console.log(`Take one down and pass it around, ${oneLess} bottles of beer on the wall.`);
        } else if (oneLess == 0) {
            console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.`);
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }

        count--;
    }
}