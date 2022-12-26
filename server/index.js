const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const App = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "100251Ali",
  database: "newProposal",
});

App.use(express.json());
App.use(cors());
App.get("/", (req, res) => {
  res.json("this is the backend ");
});

App.get("/proposals", (req, res) => {
  const q = "SELECT * FROM proposals";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

App.post("/proposals", (req, res) => {
  const q = "INSERT INTO proposals (name,title,description,upload) VALUES (?)";
  const VALUES = ["kias", "til", "QWERTYQWERTYQWERTY", "UPLOAD.PNG"];
  db.query(q, [VALUES], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

App.listen(8003, () => {
  console.log("hey , your server is running ");
});
