What is a span?

#<p>Hello<span>Beaitiful</span>World</p>

This element does not take the whole row. Or in other words, using the span element results in the specific word that is surrounded by the span tag only taking up a small amount of space compared to using a P tag or another one. This is because the span element has its display set to inline, meaning that the words will appear right next to each other.

What is a display?

It is a specific rule that can be applied to any element which makes that specific element take up a specific type of space on the website

# display : block (The element the full width of a website, and if there is another element right after it, it will appear underneath it. Height and width can't be changed in this role however, elements don't appear right next to each other)

# display : inline (The element will only take a specific amount of space, and any subsequent element occurring after it will appear right beside it. The height and width cannot be changed for these elements, because this rule only allows for elements to take up the space, but they are in)

# display : inline-block (This rule allows elements of different sizes and shapes to appear right beside each other. This rule combines both of the properties of the in-line and  block display, allowing the element to spend the whole website or take up the specific amount of space that it requires, and a lot of other variations)

What is a float? (Mainly for images)

It is a specific rule that can be applied to elements that make it so that text actually moves aside to make space for that element. 

# img {float : left} or img {float : rigth} (if the float is too left, the image will stay on the left side and the text will move around it so that it looks like a continuous thing and vice versa for right.)

# footer {clear : left} (in this example, when float is applied to an image, it would result in the footer, actually being unable to be located at the bottom of the website. So to mitigate this problem, we use the clear rule so that the fire element is not affected by the float.)

How to make a website responsive?

There are four main ways to achieve this:

1. Media Queries : Defining various different widths, so that once the screen of the website reaches those widths, the website is able to change itself to fit on the user screen.

# @media (max-width : 600px) {} (Applying a specific change in the CSS when the screen is below or equal to 600px width)

2. CSS Grid : A much more complex way of setting up a website that relies on giving certain div elements specific class names, so that the website appears the way it's intended.


3. CSS Flexbox : While CSS grid is great at creating  websites that are displayed in 2D, flexbox's Best ability is that you're able to individually control, how wide or thin a specific element needs to look in a specific direction. 

4. External Frameworks : There are other frameworks, such as bootstrap that gives the user the ability to design their websites in custom Waze based on the framework it's off

What a media query?

Very simply a media query is a breakpoint checker, when the screen reaches a certain size, certain types of CSS will be activated. 

# @media (max-width : 600px) {} (Applying a specific change in the CSS when the screen is below or equal to 600px width)

Key Words : 

1. max-width :  this mainly targets smaller screens, as when the size of the screen is at maximum a certain value the CSS will be activated
2. min-width :  This mainly targets larger screens, as when the Size of the screen is at minimum a certain length wide, the CSS will be activated


Combing Keywords

# @media (min-width : 600px) and (max-width : 900px){} (600px <= x <= 900px)
# @media (max-width : 600px) and (min-width : 900px){} (600px >= x >= 900px)

Screen Keyword 

# @media screen (orientation: landscape) {} 