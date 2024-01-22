import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;
app.use(express.static("dist"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "typescriptreactapp",
});

connection.connect();

app.get("/items", (req, res) => {
  connection.query("SELECT * FROM items", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/item/:id", (req, res) => {
  connection.query("SELECT * FROM items WHERE id = " + req.params.id, (err, rows, fields) => {
    res.send(rows);
  });
});
