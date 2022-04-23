const express = require("express");

const app = express();

app.listen(3456, () => {
  console.log(`server listening on port 4567`);
});

//parses json body and it assigns it to req.body so we can use it
app.use(express.json());

let data = require("./data");
