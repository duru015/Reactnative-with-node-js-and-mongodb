const express = require("express");
const BodyParser = require("body-parser");
const {connection} = require("./Database/mongoData");
const User = require("./Model/mongooseDb");
const cors = require("cors");
const ReactRouter = require("./Router/route");
const app = express();
const port = 8000;
app.use(BodyParser.json());
app.use(cors());
app.use("/data",ReactRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to server");
});

app.listen(port,()=>{
    console.log(`Server is running successfully on ${port}`);
})