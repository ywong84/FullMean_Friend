console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require("mongoose")
var Friend = mongoose.model("Friend")
module.exports = {
  index:function(req,res){
    Friend.find({}, function(err, friends){
      res.json(friends)
    })
  },
  create: function(req,res){
    console.log(" LINE 14");
      var friend = new Friend(req.body)
      friend.save(function(err, friend){
      if (err){
        console.log(err);
      }else {
        res.json(friend)
      }
    })
  },
  update: function(req,res){
    Friend.update({_id:req.params.id},req.body, function(err, result){
      if (err){
        console.log(err);
      }else {
        res.json(result);
      }
    })
  },
  destroy: function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      } else {
        res.json({message: "Friend deleted!"});
      }
    })
  },
  show: function(req,res){
    console.log(req.params.id);
    Friend.findOne({_id: req.params.id}, function(err, result){
      if(err){
        console.log(err);
      }else {
        res.json(result);
      }
    })
  },
  edit: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, result){
      console.log("55");
      if(err){
        console.log(err);
      }else {
        res.json(result);
      }
    })
  },
}
 // what does this export?
