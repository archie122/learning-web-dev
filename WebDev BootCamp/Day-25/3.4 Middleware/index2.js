import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("combined");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
