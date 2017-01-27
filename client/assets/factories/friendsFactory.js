console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      console.log('NEW FRIEND',newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friend){
      console.log("line 18")
      $http.put("/friends/" + friend._id, friend).then(function(res){
        if (typeof(callback) == 'function'){
          callback(friends)
        }
      })
    };

    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
        console.log(friends, "line 35");
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id,callback){
      $http.delete('/friends/' + id).then(function(res){

        friends = res.data;
        callback()
        console.log(friends, "line 42");
      });

    };
    this.show = function(data, callback){// what parameters do we need?
      $http.get('/show/'+ data.id).then(function(returned_data){
        console.log(returned_data.data, "line 56");
        friends = returned_data.data;
        callback(friends);
        console.log(friends, "line 59");
      });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(id, callback){
      console.log("line 68 hello",id);
      for (var i= 0; i < friends.length; i ++) {
        if (friends[i]._id === id){
          console.log(friends[i]._id, id);
          callback(friends[i]);
        }
      }
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
