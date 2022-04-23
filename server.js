const express = require("express");
const app = express();
const port = 3456;

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
  res.json({
    apiData,
  });
});

app.post("/api/data", (req, res) => {
  apiData.push(req.body);

  res.json({ message: `${req} was successfully added.` });
});

app.delete("/api/data", (req, res) => {
  const index = req.body.index;
  apiData.splice(index, 1);

  res.json({ message: `${index} was successfully deleted` });
});
