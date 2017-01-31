angular.module('userProfiles').service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deffered = $q.defer();
    return $http({
      method: 'GET',
      url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
      var parsedResponse = response.data.data
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = "Ralf";
      }
      deffered.resolve(parsedResponse)
    })
    return deffered.promise;
  }
});
