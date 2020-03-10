const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

const router = require("./app/router")
const url = "mongodb://localhost:27017";
const dbName = "chat";

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log("--error in db connection to--", url);
  }
  else {
    const db = client.db(dbName);
  }
});

// add middleware , app.use()

app.use("/api", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
