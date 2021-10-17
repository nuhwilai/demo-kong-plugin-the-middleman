const express = require("express");
const bodyParser = require("body-parser");
const { printAll } = require("./utils");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const books = [
  { id: 1, name: "Harry Potter I", page: 200 },
  { id: 2, name: "Harry Potter II", page: 240 },
];

app.get("/api/book", (req, res) => {
  printAll("/api/book", req);
  res.send({
    statusCode: 1,
    data: books,
  });
});

app.listen(port, () => {
  console.log(`books app listening at http://localhost:${port}`);
});
