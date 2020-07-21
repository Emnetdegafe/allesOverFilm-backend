const express = require("express");
const { PORT } = require("./constants");
const app = express();
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);




const pricesRouter= require("./routers/price")
app.use('/film/:price', pricesRouter)




app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
