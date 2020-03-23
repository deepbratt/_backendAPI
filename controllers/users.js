const router = require("express").Router();
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

router.get("/", async (req, res) => {
  const users = await Users.find({});
  res.send(users);
});

router.get("/:userId", async (req, res) => {
  const data = await Users.find({_id: req.params.userId});
  res.send(data);
});

router.post("/auth", async (req, res) => {
  await Users.find({_id : req.body.userId}, function (err,user){
  if(err){
      return res.send(err);
  }
  if(!user){
    return res.send('invalid');
  }
    return res.send(user);
  })
});

router.post("/", async (req, res) => {
  const newUser = new Users();
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;
  newUser.phone = req.body.phone;
  newUser.userPassword = req.body.userPassword;
  newUser.userDate = Date.now();
  await newUser.save((err,response)=> {
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
  });
  res.send(newUser);
  //console.log(req.body);
});

module.exports = router;
