app.controller('indexController', ['$scope','friendsFactory', 'userFactory', function($scope, friendsFactory, userFactory) {
  userFactory.get(function(user){
    if(!user){
      var user = prompt("username")
      if(user) {
        userFactory.set(user)
      }
    }
  })
  console.log("index controller loaded")
  var index = function(){
    friendsFactory.index(function( returnedData){
      $scope.friends = returnedData;
      console.log($scope.friends);
      $scope.friend = {};
    });
  }
  index();
  $scope.delete = function(id) {
    friendsFactory.delete(id, index)
  };

}]);
