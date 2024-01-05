What is Express?
 It is a JS framework that is used to create web applications. Because no, Node.js is not actually a framework (it is a runtime environment), a lot of developers, utilize Epress and Node.js to create applications. 

Why not just use Node.js?
 Node.js way too powerful and all encompassing. It has the ability to be used almost in every application you can think of. The quote "Every program will eventually be written in JavaScript" is true. So Express allows for a more web based approach to Node.js. It makes it easier to create a web application.      

Client Side : Also refered to as the front end, the client side is the part of the application that the user interacts with.

Server Side : Also refered to as the back end, the server side is the part of the application that the server interacts with.

What is local host?
 Because we don't have a domain name or IP address, we use localhost. Basically, we are making our computer a server. 

What is a port? 
 A port is a number that is used to communicate with other computers.

What is an HTTP request?
 HTTP stands for Hypertext Transfer Protocol. It is a protocol used to transfer data from one computer to another.

 GET is used to retrieve data from the server.  
 POST is used to send data to the server.
 PUT is used to replace or update data on the server.
 DELETE is used to delete data on the server.
 PATCH is used to patch up data on the server.

What are the HTTP Response Codes?
 200 - OK
 300 - Redirect
 400 - Bad Request
 404 - Client Error
 500 - Server Error

What is Postman?
 Postman is a web application that allows you to test your HTTP requests.

What is middleware?
 It is a type of software that is used to handle requests and responses. Somethings that middleware can do involve : 
    1. Preprocessing : Before the request is processed
    2. Logging : After the request is processed
    3. Authentication : Check if the request is authenticated 
    4. Authorization : Check if the request is authorized to be sent
    5. Error handling : Handle any errors that may occur

 Example : 
    Body Parser : This middleware parses the body of the request and makes it available to the request handler.
    Morgan : This middleware logs the request and response.

How to make custom middleware?
 The basic process behind middleware is to create a function that takes two arguments : 
    1. The request object
    2. The response object
 With the use of the .use() method, you can create a middleware function.

!! IMPORTANT !!

When working with Express, the first part of the get and post refer to the names in the HTML or EJS file. The second part of the get and post refer to the name of the method. Example : 

```
app.get("/", (req, res) => {
  res.render("index.ejs", {
    title : "Welcome to the Band Name Generator🤘",
  });
});

app.post("/submit", (req, res) => {
  let band_name = adj[Math.floor(Math.random() * adj.length)] + " " + noun[Math.floor(Math.random() * noun.length)];

  res.render("index.ejs", {
    title : band_name
  });
});
```

 The information inside the quotes are what is being passed from the HTML or EJS file to the server.