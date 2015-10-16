angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link={}; // why do we need this?

  $scope.addLink=function(link){
    Links.addLink(link);
  };
});

