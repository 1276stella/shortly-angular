angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data={};

  $scope.getLinks=function(){
    $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      $scope.data.links = resp.data;
    }, function(err){
      if(err) throw err;
    });
  };
  $scope.getLinks();
});
