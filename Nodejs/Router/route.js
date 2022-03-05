const express = require("express");
const User = require("../Model/mongooseDb");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const ReactRouter = express.Router();
ReactRouter.use(bodyParser.json());
ReactRouter.route("/");
ReactRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    console.log("error occured");
  }
  if (user && password === user.password) {
    res.json({ status: "success", user: user });
    console.log("login success");
  } else {
    res.json({ status: "Not matched" });
  }
});
ReactRouter.post(
  "/register",
  body("username").isLength({ min: 5 }),
  body("password").isLength({ min: 5 }),
  body("confirmPassword").isLength({ min: 5 }),
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password,confirmPassword } = req.body;
    const user =await User.findOne({ username,password,confirmPassword });
    if (!user) {

      User.create({
        username: req.body.username,
        password: req.body.password,
        confirmPassword:req.body.confirmPassword

      });
      console.log("user successfully created");
    }
    else{
        console.log("alert username is already used");
    }

    

    // res.json({status:"success",user:user});

    
    return res.json({ status: "successful" });
  }
);


ReactRouter.get('/getAllData',(req,res)=>{
 
  User.find({}).then(function (users) {
    res.send(users);
    });
});
module.exports = ReactRouter;
