var path = require('path');
var friends = require('./../controllers/friends.js');
module.exports = function(app){

  app.get('/friends', function(req,res){
    friends.index(req, res);
  });
  app.get('/edit/:id', function(req,res){
    friends.edit(req, res);
  });
  app.get('/show/:id', function(req,res){
    friends.show(req, res);
  });
  app.post('/friends', function(req,res){
    friends.create(req, res);
  });
  app.put('/friends/:id', function(req,res){
    friends.update(req, res);
  });
  app.delete('/friends/:id', function(req,res){
    friends.destroy(req, res);
  });
}
