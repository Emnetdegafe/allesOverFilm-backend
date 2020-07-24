const express = require("express");
const { PORT } = require("./constants");
const app = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);




const pricesRouter= require("./routers/prices")
app.use("/films", pricesRouter)
// console.log('prices', pricesRouter)

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
