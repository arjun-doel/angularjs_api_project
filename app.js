angular.module('apiProject', [])
  .controller('apiController', function($scope, $http) {

    $scope.header = 'Angular API Project';

    $http.get('www.themealdb.com/api/json/v1/1/list.php?c=list')

  })