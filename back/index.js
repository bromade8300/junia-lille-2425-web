const express = require("express");
const cors = require("cors");
const { readFileSync } = require("fs");
const port = 3000;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let data = JSON.parse(readFileSync("./data.json", { encoding: 'utf8', flag: 'r' }));

app.get("/todo", (req, res) => {
  return res.json(data);
});

app.put("/todo/:id", (req, res) => {
  const indexToModify = data.findIndex(({id}) => Number(req.params.id) === Number(id))
  data[indexToModify].done = !data[indexToModify].done;
  return res.json(data);
})

app.post("/todo", (req, res) => {
  data.push(req.body);
  return res.json(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})