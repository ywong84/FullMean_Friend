app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
  console.log("new controller loaded");
   $scope.create = function(){
     friendsFactory.create($scope.friend, function(data){
       if(data.errors){
         $scope.errors = data.errors
       }else {
         $location.url("/")
       }
     })
   }
}]);
