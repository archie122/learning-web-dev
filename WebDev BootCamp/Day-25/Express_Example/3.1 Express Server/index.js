import express from "express";                          // Import
const app = express();                                  //Object
const port = 3000;                                       //Port

app.get("/", (req, res) => {                           //Because there is a get request, we use the get method and are able to send a response. 
    res.send("Hello World");
});


app.listen(port, () => {                               //Listening on port 3000, in other words, checking if the server is running. 
    console.log(`Listening on port ${port}. `);     
})


