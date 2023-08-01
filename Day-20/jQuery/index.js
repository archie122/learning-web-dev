        // $("h1").css("color", "blue");

// Most of the time, it may be that the cdn is not placed in the correct location on the page. So to fix this, we can use the following code: 

        // $(document).ready(function(){ 
        //     $("h1").css("color", "blue");
        // })

// Personally, I think it's a good practice to use the cdn in the correct location on the page and use the above code.

// Selecting Elements using jQuery

$('button').click(function(){   // This line selects the all the buttons
    console.log("Button clicked");
});

// Getting the value form the website

$('div .1').click(function(){
    console.log($('h1').css('color'));
    console.log($('h1').text());
})

// Setting the value form the website

$('div .2').click(function(){
    $('h1').css('color', 'red');
})

// Adding a class to an element

$('div .3').click(function(){
    $('h1').addClass('big_text');
})

// Removing a class from an element

$('div .4').click(function(){
    $('h1').removeClass('big_text');
})

// Removing all classes from an element

$('div .5').click(function(){
    $('h1').removeClass();
})

// Check if an element has a class (Gives a boolean)

$('div .6').click(function(){
    console.log($('h1').hasClass('big_text'));
})

// Changing the text of an element

$('div .7').click(function(){
    $('h1').text('Bye');
})

// Adding HTML to an element

$('div .8').click(function(){
    $('button').html('<h1>Hello</h1>');
})

// Adding an attribute to an element

$('div .9').click(function(){
    $('img').attr('src', 'https://picsum.photos/200');
})

// If I wanted to get the src of the image, I would use the following code:
// $('img').attr('src');

$('input').keypress(function(event){
    console.log(event.key);
})

// The code below will display the key pressed by the user as the text in the h1 element
$(document).keypress(function(event){
    $('h1').text(event.key);
})


// The code below will change the color of the h1 element to green when the user moves the mouse over it. 
// (Also look at the MDN for more info on events and event handlers, here is the link - 
// https://developer.mozilla.org/en-US/docs/Web/Events)
$('h1').on('mouseover', function(){ 
    $('h1').css('color', 'green');
})

// Adding new elements to the DOM
$('div .10').click(function(){
    $('h1').before('<h1>Before</h1>');
})

$('div .11').click(function(){
    $('h1').after('<h1>After</h1>');
})

// There is also prepend and append methods that can be used to add new elements to the DOM. 
// The append method will add the new element to the end of the list.
// The prepend method will add the new element to the beginning of the list.

// Adding animation to an element

$('div .12').on('click', function(){ // This line hides the h1
    $('h1').hide();
})

$('div .13').on('click', function(){ // This line shows the h1
    $('h1').show();
})

$('div .13').after('<button class="14"> Buttton 14</button>');

$('div .14').on('click', function(){ // This line toggle the h1 between showing and hiding
    $('h1').toggle();
})

$('div .15').click(function(){ // This line fade the h1 in
    $('h1').fadeOut();
})

$('div .16').click(function(){ // This line fade the h1 out
    $('h1').fadeIn(); 
})

// You can also use the fadeToggle method to toggle between showing and hiding

$('div .16').after('<button class="17"> Button 17</button>');

$('div .17').click(function(){ // This line slides the h1 in and out
    $('h1').slideToggle();
})

// Also look at the animate method for jQuery here - https://api.jquery.com/animate