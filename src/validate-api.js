const express = require("express");
const bodyParser = require("body-parser");
const { printAll } = require("./utils");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post("/validate/book", (req, res) => {
  printAll("/validate/book", req);

  // req.body.headers => called when use with kong
  // req.headers => called when using normal
  const xCredentail =
    req.headers["x-credential"] || req.body.headers["x-credential"];

  if (xCredentail === "abcd") {
    res.send({ payload: "success", message: "can attatch additional message" });
    return;
  }
  res.status(401);
  res.send({ payload: "fail" });
});

app.listen(port, () => {
  console.log(`validate app listening at http://localhost:${port}`);
});
