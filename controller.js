angular.module('userProfiles').controller('mainController', function($scope, mainService){

  $scope.getUsers = function() {
      mainService.getUsers().then(function(dataFromService) {
        $scope.users = dataFromService;
      });
    }

    $scope.getUsers();

  });
