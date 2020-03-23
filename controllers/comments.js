const router = require("express").Router();
const mongoose = require("mongoose");
const Comments = mongoose.model("Comments");

router.get("/:postId", async (req, res) => {
  const comments = await Comments.find({ "postId" : req.params.postId });
  res.send(comments);
});

router.post("/", async (req, res) => {
  const newComments = new Comments();
  newComments.description = req.body.description;
  newComments.userId = req.body.userId;
  newComments.postId = req.body.postId;
  newComments.commentDate = Date.now();
  await newComments.save((err,response)=> {
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
  });
  res.send(newComments);
  //console.log(req.body);
});

module.exports = router;
