Why is it called Cascading Style Sheets? 

This is because a single element can have multiple different rules targeting it. And for that reason, CSS is able to target the same element one at a time based on what is located lower on the CSS file. 

How do you determine importance?

The window to determine importance is based off of four broad categories.

1. Postion : Checking whether the rule is located, higher or lower. Generally, whatever is located, lower on a specific element is going to be the one that gets used.
# li {
#   color : red;
#   color : blue; (Because this is located lower, this is the one the will be used)   
# }

2. Specificity : This is based on how specific the targeting is.
# <li id="first-id" class="first-class" draggable>
# 
# li { color : blue; }              4. (Element selector : least specfic, goes to multiple elements)
# .first-class { color : red }      3. (Class selector : least specfic, goes to multiple elements with the same class name)
# li[draggable] { color : purple }  2. (Attribute selector : more specfic, goes to the elements with the specific attribute)
# #first-id { color : orange }      1. (Id selector : most spefic, goes only to the unique attribute with a unique ID)
# 
   
3. Type : The type of style that is applied
# <link rel="stylesheet" href="./style.css">    3. External Styling (Multiple webpages)
# <style> </style>                              2. Internal Styling (Only on one webpage)
# <h1 style=" "> Hello </h1>                    1. Inline Styling   (Spefic to the unique element)
   
4. Importance : Does the css rule use the "!important" rule. This makes it impossible to change on any level
# color : red;
# color : green !important;


Combining CSS Selector 

Group Rule : Selecting both of the elements
# selector, selector {color: blue}

Chlid Rule : Selecting anything in the tag that only one lower 
# selector > selector {color: blue}

Decendant Rule : Like the chlid rule but can be applied more then once and can be lower 
# selector selector {color: blue}

Chaining Rule :  A form of just resting all the targeting selectors in line (very spefic and start with the element name)
# selectorselector {color: blue}
# h1#Big {color: red}

Combining Rule : Using all the rules
# selector selectorselector {font: 0.5rem}


How to position element in CSS?

1. Static Positioning : This is the default, where the element follows the rest of the html

2. Relative Positioning : This positioning moves the element relative to the default (in other words, static postion with modifications)

3. Absolute Positioning : This positioning moves the element that is nearest positioned ancestor (in other words, the element is close to the another element that is been positioned)
   1. Z-Index : Determing which element goes on top or bottom 
# z-index : -1 behind everything 
# z-index : 0  above everything

4. Fixed Positioning : This positioning moves the element that is a spefic location from the top left corner

It's important to remember that position is seperate for the margin, padding or borders