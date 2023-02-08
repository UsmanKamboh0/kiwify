//console.log("Welcome to Node API Tutorial");
// npm install --save-dev nodemon
// npm install cors
const path = require('path');

const express= require("express");
const bodyParser= require("body-parser");
const cors= require("cors");
const app= express();
const port= 5000;
const Urlpth= require("./router");
app.use(bodyParser.json());
app.use(cors());
app.use("/", Urlpth);

app.use(express.static(path.join(__dirname, "./build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});


app.listen(port, ()=>console.log("Server running on port 5000"));