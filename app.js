angular.module('apiProject', [])
  .controller('apiController', function ($scope, $http) {

    $scope.header = 'Angular API Project'

    $http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken').then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.meals = response.data.meals;
      console.log('data', $scope.meals);
    }
    function errorCallback(error) {
      console.log(error)
    }

  });