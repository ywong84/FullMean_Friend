app.controller('showController', ['$scope', '$routeParams', 'friendsFactory', function($scope, $routeParams, friendsFactory) {
  console.log("show controller loaded");
  friendsFactory.show($routeParams, function(returnedData){
    $scope.friends = returnedData;
    console.log("one friend");
  });
}]);
