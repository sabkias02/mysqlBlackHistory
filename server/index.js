const express = require("express");
const mysql = require("mysql");

const App = express();
const db = mysql.createConnection({
  host:


})

App.listen(3306, () => {
  console.log("hey , your server is running ");
});
