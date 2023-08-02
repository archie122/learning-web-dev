let buttonColours = ["red", "blue", "green", "yellow"]
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let started = false;

$(document).keypress(function(event){
    if(!started){
        console.log(event.key);
        nextSequence();
        $('h1').text("Level " + level);
        started = true;
    }
})



function nextSequence(){
    level++;
    $('h1').text("Level " + level);
    userClickedPattern = [];
    randomNumber = Math.floor(Math.random() * 4);
    let randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);
    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + randomColour + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        colour_sound("wrong");
        $("body").addClass("game-over");
        $('h1').text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}


$(".btn").click(function(){
    console.log(this.id);
    $('.' + this.id).addClass('pressed');

    setTimeout(function(){
        $('.btn').removeClass('pressed');
    }, 150);
    
    colour_sound(this.id);
    userClickedPattern.push(this.id);
    checkAnswer(userClickedPattern.length - 1);
})


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function colour_sound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

