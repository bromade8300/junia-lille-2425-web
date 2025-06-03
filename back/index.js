const express = require("express");
const cors = require("cors");
const { readFileSync } = require("fs");
const port = 3000;
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/todo", (req, res) => {
  const data = readFileSync("./data.json", { encoding: 'utf8', flag: 'r' });
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})