//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url)); // __dirname is the current directory (In other words, the directory that contains index.js)

const app = express();
const port = 3000;
const password = "ILoveProgramming";
let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    const user_password = req.body["password"];
    if (user_password === password) {
        userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

    // app.post("/check", (req, res) => {
    //     let user_password = req.body["password"]
    //     if (user_password === password) {
    //         res.sendFile(__dirname + "/public/secret.html");
    //     } else {
    //         res.sendFile(__dirname + "/public/index.html");
    //     }
    // })


app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }

    userIsAuthorised = false;
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



