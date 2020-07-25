
require("dotenv").config()

const express = require("express");
const { PORT } = require("./constants");
const bodyParserMiddleWare = express.json();
const pricesRouter= require("./routers/prices")
const reviewsRouter = require("./routers/reviews")


const app = express();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());


app.use("/", pricesRouter)

app.use("/", reviewsRouter)

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
