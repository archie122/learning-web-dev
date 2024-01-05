CSS : Cascading style sheets

Types os CSS Implementaion : 
1. Inline : The CSS code is located inside the tag, mainly used as a style attribute  "<tag style="css"/>"
2. Internal : The CSS code is located in the html file, in it's own specfic section, needs a specfic selector (not meant for multiple websites)"<style>html{"css"}</style>
3. External : The CSS code is located in a seperate file, this allows for the file to be accessed by multiple different websites  "<link rel="stylesheet" (This is also known as the relationship) href="./style.css">"

CSS Selector : Usually the tag name that is used to target the correct element to modify 
Example : h1 {color: "red"}

Class Selector : A spefic name that is given to the elements of a website to be modified 
Example : .red_text{color: : "red"}

Class : An attribute that can be added to any element from a website There is used to group multiple elements, regardless of the tag (For multiple elements)
Example : <h2 class="red_text"> Heading 2</h2>

ID Selector : A specific ID that can be given to multiple different elements or website that can be modified together (For one element, in other words, must be unique to the specfic element)
Example : #red_text{color: : "red"}

Attribute Selector : Selecting multiple elements based on the specific attributes that they have
Example : p[draggabe]{color: "red"}

Example 2 : p[draggabe="false"]{color: "red"}

Universal Selector : Selecting all elements 
Example : *{color: "red"}