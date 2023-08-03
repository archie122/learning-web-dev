What is Flexbox?
    While using float is a little bit easier, it is mainly meant for images. Fax box allows for a more complex way of organizing a webpage in a fast and efficient way. When using flex box, it is important to forget the use of inline, block, inline-block and none. This is because those old rules will conflict with how efficient flex box is. Another way of looking at flex box is that it allows for each element to only take up as much space as the content that is inside of it. Compare to using the old display rules, each specific element will take up its own specific space.** By default, when you set an element to display: flex, it results in that container being a display: block element. This can be mitigated by using display: inline-flex.**

<!-- .container { (This segment of code alone can make a more complex lay out very easily)
    display: flex;
    gap: 10px
} -->

Flex Direction 
    Compared to the display property in HTML, flex box has a much more formulated approach to properly designing the elements on the website. This property is achieved through the rule of the flex Dash direction. What do use this rule we are able to change the direction, and the location of where certain elements are actually located on the website. The main axis actually changes based on the flex direction that it's up to. And so does the cross axis.

<!-- 
    flex-direction : row;       (All the elements of here to go from left to right)
    flex-direction : column;    (All the elements appear to go from top to bottom)
    flex-basis : 100px          (This property is akin to changing the actual size of each element, It's also relative based on which direction the flex direction is put in. In other words, if flex direction is set to roll, the flex basis will change the width of the element. And if flex direction is set to column, the flex basis change the height of the element.)
 -->

Order Property 
    The property basically allows you to set each element with a specific order number, and which ever element has the largest order number will be pushed all the way to the end of that particular location. This property is set to the child elements and not the parent element.

Flex Wrap Property 
    By default the flex wrap property is set to nowrap, Which means no matter the size of the screen the elements will continue to be displayed in a line regardless of if they can be seen or not. By changing this flex wrap property, we are able to actually shift the elements to the next line as the screen size changes. This is a property on the parent.

<!-- 
    flex-wrap : nowrap;
    flex-wrap : wrap;
 -->

Justify Content property
    This property is on the parent and is responsible for displaying where the website actually begins displaying its elements from. There are two particular property names. First one is flex-start, and the other one is flex-end. Another one is the centre property which moves all the elements to the centre of the screen.

<!-- 
    justify-content : flex-start;   (The elements appear starting from the left side of the screen to the right side)
    justify-content : flex-end;     (The elements appear starting from the right going towards the left)
    justify-content : center;       (The elements appears starting from the centre of the screen and going both left, and right as the number of elements increases)
    justify-content : space-between;(The elements individually have spacing in between them, This is done by making the last, and first element stuck to the edges of the screen)
    justify-content : space-around; (The elements are spaced out evenly on both sides of the screen)
    justify-content : space-evenly; (The elements are evenly spaced out)
 -->

Align Items 
    This property is on the parent and is responsible for aligning the elements to the screen based on which property is used.

<!-- 
    align-items : flex-start;       (The elements will appear at the very top of the inner box they are located in)
    align-items : flex-end;         (The elements will appear at the very bottom of the inner box the are located in)
    align-items : center;           (the elements will appear in the centre of the inner box they are located in)
 -->

Align Self
    If you wanted to move a specific element, his specific location, then the alliance self property can be used to make that specific element be in a different location. This property is applied to the child element.

<!-- 
    align-self: flex-start          (The specific element will appear at the top)
    align-self: flex-end            (The specific element will appear at the bottom)

 -->

Align Content 
    This property only activates when the flex wrap is actually set to wrap. The reasoning for this is because the wrap property works in different times at different cases. So if there is a bunch of Contant that you want to wrap around in the contact is actually located in the centre of the screen we use this property.

<!-- 
    flex-wrap : wrap;               (The elements will wrap according to the size of the screen)
    align-content : center;         (The elements will be located in the correct location)
 -->

Flex Flow 

Flex Sizing
    The way to properly size elements using flex box, basically depend on a criteria list. Where the max with/min with our considered the most important out of everything, then comes the flex basis, Then comes the width of the actual HTML element, and finally comes the width of the content itself. In the criteria of widths, the maximum width mainly is dependent on the longest line that can be set unless it's defined, and for the minimum width, the largest word in the sentence will be its longest width. Unless it's defined as well. If however, the maximum width is set to let's say 100 pixels, and the flex basis is set to 50 pixels the file will look at the flex basis and ignore the max with. Another way of looking at maximum width and minimum width is maximum width. Tells the website how big the maximum width of the element can be and the minimum width is how small the elements can be. 
    
    
    There are also rules, such as flex grow and flex shrink. Alex grow except one, and the flex bases is set to a certain amount, the element itself will grow if there is more space available, and if there isn't more space available, it will continue to occupy that space that flex bases has.  if flex shrink is set to one, then the elements will continue to occupy. Dad sets space sat by the flex basis. However, when the screen gets smaller, the minimum width of each element takes over. Both elements are set to one then each element in the website is going to try and occupy as much space as possible if there is more screen real estate, and if the screen become smaller and smaller, the website will only occupy the minimum width. 

<!-- 
    max-width/min-width > flex-basis > width > content width

    flex : 1 1 0; (flex-grow, flex-shrink, flex-basis)
 -->
