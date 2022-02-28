const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/7thsem";
const connection = mongoose.connect(url);
connection.then((db)=>{
  console.log("database is connected successfully");
})
.catch((e)=>{
    console.log(e.getmessage());
});
module.exports = {connection};