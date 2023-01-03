const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const App = express();
const unsplash = require("unsplash-js").default;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "100251Ali",
  database: "newProposal",
});

App.use(express.json());
App.use(cors());
// unsplash = new unsplash({
//   applicationId: "1xg6Py7pkOWr_8lSRFRpTvAacLRqsKewoPezmPNN7wo",
//   secret: "Xj-Ml3YjQq8Kty3tsxoduZih7cCWUxHckg42U_byK5U",
// });
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
  const VALUES = [
    req.body.name,
    req.body.title,
    req.body.description,
    req.body.upload,
  ];
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
