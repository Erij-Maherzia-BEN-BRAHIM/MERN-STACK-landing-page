const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const morgan = require('morgan')

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/connect");
const port = process.env.PORT;
//require Models
const Users = require("./models/userSchema");
const Message =require ('./models/msgSchema')
const authenticate= require('./middleware/authenticate')
//to get data and cookiens from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(morgan("tiny"))
//registration
app.post("/register", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("new user registred successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
  
    //find user if exists
    const user = await Users.findOne({ email: email });
    if (user) {
      //verify password
      const isMatch = await bcryptjs.compare(password, user.password);
      if (isMatch) {
        //generate Token defined in userScema
        const token = await user.generateToken();
        res.cookie("jwt", token , {
          //expires token in 24h
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        res.status(200).send("LoggedIn");
      } else {
        res.status(400).send("invalid credentials");
      }
    } else {
      res.status(400).send("your username or password is incorrect");
    }
  } catch (error) {
    console.log(error)
  } 
});
//message
app.post("/message", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Msg Sent");

  } catch (error) {
    res.status(400).send(error);
  }
});
//logout

app.get('/logout', (req, res)=>{
  res.clearCookie("jwt", {path : '/'})
  res.status(200).send("User Logged Out")
})

 
//authentification
app.get('/auth', authenticate, (req,res)=>{

})



app.listen(port, () => {
  console.log("server is listening ");
});
