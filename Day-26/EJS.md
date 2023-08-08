What is EJS?
 It stands for Embedded JavaScript Templates. And the purpose of EJS is to help us to create dynamic web pages. In other words, when 
 you sends a request to the server, EJS allows you to pass variables to the HTML template without have to rewrite the HTML code in the
 app.post() method.

 It is really important to separate the HTML code and the CSS code from the JavaScript code. This is important because it allows us to 
 keep all of the code readable and maintainable. It also seprartes the front end from the back end.

 Another way of looking at EJS is that it is a templating language. It allows us to write the HTML code in the HTML template and then 
 pass the variables to the JavaScript code. There are other languages that allow us to do this, like : 
    - Handlebars
    - Liquid
    - Mustache
    - Pug
    - Twig

What tags are supported in EJS?
 It supports the following tags:
   - <%= %>    (Anything that is inside the tag will be interpreted as a JavaScript expression and will have an output) 
   - <% %>     (Anything that is inside the tag will be interpreted as a JavaScript expression)
   - <%- %>    (Anything that is inside the tag will be interpreted as HTML)
   - <%% %%>   (Anything that is inside the tag will show the EJS tag itself)
   - <%# %>    (Anything that is inside the tag will be a comment)
   - <%- include("<FILE NAME>")%> (Anything that is inside the tag will insert an EJS file )
  
Does EJS have scope?
 It does not have scope. In other words, EJS is unable to check where a piece of data is coming from or if it is defined or not.
 The way to get around this is to use the locals keyword.

How to use partials in EJS?
 We can use partials in EJS to break down our HTML code into smaller pieces. This is useful when we want to reuse the same HTML code 
 in multiple places.

Why doesn't the EJS code work?
 When working with EJS, it is important to remember that EJS doesn't load files normally. You need to set 'app.use(express.static("public"));' and have all the styling elements and images inside it. 