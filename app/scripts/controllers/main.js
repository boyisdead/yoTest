'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'AngularJS',
      'Karma',
      'Arma'
    ];

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.revTodo = function (index) {
    	$scope.todos.splice(index,1);
    };
  });
