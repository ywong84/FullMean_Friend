app.controller('editController', ['$scope', '$routeParams', '$location','friendsFactory', 'userFactory', function($scope, $routeParams, $location, friendsFactory, userFactory) {
  $scope.user = ''
  userFactory.get(function(user){
    $scope.user = user;
    if(!user){
      $location.url("/");
    }
  })
  friendsFactory.show($routeParams, function(returnedData){
    $scope.friend = returnedData;
    $scope.friend.birthday = new Date(returnedData.birthday)
    console.log("one friend");
  });
  $scope.update = function(){
    friendsFactory.update($scope.friend, $routeParams)
    $location.url("/")
    console.log($scope.friend);
  }
}]);
