const express = require("express");

const app = express();

port = 3456;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

//parses json body and it assigns it to req.body so we can use it
app.use(express.json());

let apiData = require("./data");

console.log(apiData);

app.get(`/`, (req, res) => {
  res.send(`
  <h1>Welcome to SiteMate API Test</h1>
  <p>Talk to our Api by using /api/data</p>
  `);
});

app.get("/api/data", (req, res) => {
  console.log(res.data);
  res.json({
    apiData,
  });
});
