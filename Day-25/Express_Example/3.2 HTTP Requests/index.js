import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Hello World! </h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1> Something else!! </h1>');
})

app.get('/contacts', (req, res) => {
    res.send('<h1> Contacts </h1>');
})


app.listen(port, () => {
    console.log(`Listening on port ${port}. `);
})