angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location,$http, Links) {
  // Your code here
  $scope.link={};

  $scope.addLink=function(link){
    $http({
      method:'POST',
      url: '/api/links',
      data: link
      })
    .then(function(resp){
      console.log(resp.data);
    });

  };
});



//  it('should be able to create new links with addLink()', function () {
//     $httpBackend.expectPOST("/api/links").respond(201, '');
//     $scope.addLink();
//     $httpBackend.flush();
//   });
// });
