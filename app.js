angular.module('apiProject', [])
  .controller('apiController', function ($scope, $http) {

    $scope.header = 'Angular API Project'

    $scope.mealSearch = function(event) {
      $scope.userSearch = event.target.value;
      console.log($scope.userSearch)
      $http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${$scope.userSearch}`).then(successCallback, errorCallback);
    }

    

    function successCallback(response) {
      $scope.meals = response.data.meals;
      console.log('data', $scope.meals);
    }
    function errorCallback(error) {
      console.log(error)
    }

  });