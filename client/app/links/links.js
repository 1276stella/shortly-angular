angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data={};
  console.log('My data:', $scope.data);

  $scope.getLinks = function() {
    Links.getLinks()                //were calling getLinks and it returns a promise
      .then(function(data) {        //in promises paramaters are passed on from the 
                                    //last return value in the previous function(then)
        $scope.data.links = data;   
      })
      .catch(function (error){
        console.error(error);
      });
  };
  $scope.getLinks();
});
