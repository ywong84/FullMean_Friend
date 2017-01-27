app.factory("userFactory", function(){
  var user = "";
  var factory = {}
  factory.get = function(callback){
    callback(user);
    return user;
  }
  factory.set = function(currUser) {
    user = currUser
  }
  return factory
})
