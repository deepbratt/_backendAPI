const router = require("express").Router();
const mongoose = require("mongoose");
const Posts = mongoose.model("Posts");

router.get("/", async (req, res) => {
  const posts = await Posts.find({});
  res.send(posts);
});

router.post("/", async (req, res) => {
  const newPosts = new Posts();
  newPosts.title = req.body.title;
  newPosts.description = req.body.description;
  newPosts.userId = req.body.userId;
  newPosts.postDate = Date.now();
  console.log(newPosts);
  await newPosts.save((err,response)=> {
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
  });
  res.send(newPosts);
  //console.log(req.body);
});

module.exports = router;
