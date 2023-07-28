How to use inline JavaScript? 
 The way to use inline JavaScript is to add the following code to your HTML document:
 
 '''html
    <body onload="alert('Hello!!!');">
        <h1>Hello World</h1>
    </body>
 '''

 The onload event is the event that is triggered when the page is loaded.

How to use internal JavaScript? 
 The way to use internal JavaScript is to add the following code to your HTML document:
 
 '''html
    <body>
        <h1>Hello World</h1>
        
        <script>
            alert("Hello World");
        </script>
    </body>
 '''

 The script tag is the tag that contains the JavaScript code.


How to use external JavaScript? 
 The way to use external JavaScript is to add the following code to your HTML document:
 
 '''html
    <body>
        <h1>Hello World</h1>
        
        <script src="script.js"></script>
    </body>
 '''

 This way of using the script tag is called external JavaScript. It allows you to include external JavaScript code in your HTML document.

Where should you place the script tag? 
 The script tag should be placed at the bottom of the HTML document, just after the closing body tag. The reasoning for this is because unlike CSS, JavaScript works best when all the content is already placed in the HTML document, and the script tag is able to reference all the code in the HTML document.

What is a DOM? 
 DOM stands for Document Object Model. It is a programming model that allows you to create and manipulate HTML elements and their attributes. The lack of JS makes it so that the website is not interactive or dynamic. In other words, the website appears to be very static. 

How does the DOM work?
 The DOM works by converting the HTML document into a tree like structure. This tree is called the Document Object Model (DOM). This allows JS to get access to all the HTML elements and their attributes.

'''js
    document.firstElementChild.firstElementChild; (This line gets access to the first element in the first element in the first element. The code example, this would be head tag)
'''

How do you change the text of an element?
 The way to change the text of an element is to use the innerText property.
 '''html
    <body>
        <h1>Hello World</h1>
        <p>This is my first paragraph.</p>
    </body>
 '''

 '''js
    document.firstElementChild.firstElementChild.innerText = "Hello World"; (The innerText property is used to change the text of an element.)
    
    document.firstElementChild.firstElementChild.style.color = "red"; (To change the color of an element.)
 '''

Get Property 
 The get property is used to get the value of an element so that it can be changed.

Set Property 
 The set property is used to set the value of an element, this is used to change the value of an element.

Call Method 
 The call method is used to call a method on an element.

(The difference between a method and a function is that a method is used to change the value of an element, while a function is used to call a method.)

Property and Method
 The property is used to get the value of an element, and the method is used to change the value of an element.

What is a querySelector?
 The querySelector is used to select an element by its tag name. This function can take in an ID, class name, or element name.

What is a querySelectorAll?
 The querySelectorAll is used to select all elements by their tag name. This function returns an array of elements, so you need to be specific about what you are looking for.

What is a getElementById?
 The getElementById is used to select an element by its ID. 

What is a getElementsByClassName?
 The getElementsByClassName is used to select all elements by their class name. This function returns an array of elements, so you need to be specific about what you are looking for.

What is a getElementsByTagName?
 The getElementsByTagName is used to select all elements by their tag name. This function returns an array of elements, so you need to be specific about what you are looking for.

How would you add more classes to an element using JS?
 The way to add more classes to an element using JS is to use the addClass() method. You can also use the removeClass() method to remove a class if it's already there. And you can also use the toggleClass() method to toggle a class if it's already there.

'''js
    document.getElementById("myButton").classList.add("myButton");
'''

What is the difference between the innerHTML and textContent property?
 The innerHTML property is used to get the value of an element, you are also able to add HTML code to an element, and the textContent property is used to set the value of an element.

How do you get the attribute of an element?
 The way to get the attribute of an element is to use the getAttribute() method.

How do you change the attribute of an element?
 The way to change the attribute of an element is to use the setAttribute() method.