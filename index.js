const express = require("express");
const app = express();
const ejs=require("ejs");
const bodyParser = require("body-parser");
const bcrypt=require("bcrypt")
const passport=require("passport")

const collection=require("./mongodb");

app.get("/", (req,res)=>{
  res.render("home.ejs")
})

app.get("/login",(req,res)=>{
  res.render("login.ejs");
});

const urLencodedParser=bodyParser.urlencoded({extended:false});

app.get("/signup", (req,res)=>{
  res.render("signup.ejs");
  console.log(req.body); // debug statement to check the req.body object
});


app.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(15);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  console.log(hashedPass); // debug statement to check the value of hashed password


  const data = new collection({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hashedPass,
    confirmpwd: req.body.confirmpwd,
  });

  try {
   await data.save(data)
   .then(results=>{
    res.send("Data saved successfully");
   })
   .catch(err=>[
    console.log(err)
   ])
  } catch (err) {
    console.log(err);
    res.status(500).send("Error: Data not saved!");
  }
});

app.listen(4701,()=>{
  console.log(`app running at port 4701`)
})