
require("dotenv").config()

const express = require("express");
const { PORT } = require("./constants");
const bodyParserMiddleWare = express.json();
const pricesRouter= require("./routers/prices")

const app = express();
app.use(bodyParserMiddleWare);




app.use("/films", pricesRouter)
// console.log('prices', pricesRouter)

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
