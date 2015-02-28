'use strict';

/**
 * @ngdoc function
 * @name goTodoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goTodoAppApp
 */
angular.module('goTodoAppApp')
  .controller('MainCtrl', [ '$scope', 'todoStorage', function ($scope, todoStorage) {

        $scope.todos = [];
		$scope.newTodo = '';

		var todos = todoStorage.todos();
		var todo = todoStorage.todo();

		$scope.loadTodos = function(){
			todos.get(function(successResponse){
				$scope.todos = successResponse;
            },function(errorResponse){
				console.log(errorResponse);
			});
		};

        $scope.addTodo = function () {

			var newTodo = {
				name: $scope.newTodo.trim(),
				completed: false
			};

			if (!newTodo.name) {
				return;
			}

			todos.post(newTodo, function(successResponse){
				$scope.loadTodos();
				console.log(successResponse);
			},function(errorResponse){
				console.log(errorResponse);
			});

			$scope.newTodo = '';
		};

		$scope.removeTodo = function (selectedTodo, index) {
            todo.remove({'id':selectedTodo.id}, selectedTodo, function(successResponse){
				console.log(successResponse);
				$scope.todos.splice(index, 1);
			},function(errorResponse){
				console.log(errorResponse);
			});
		};

		$scope.toggleCompleted = function (selectedTodo) {
			todo.patch({'id':selectedTodo.id}, selectedTodo, function(successResponse){
				console.log(successResponse);
			},function(errorResponse){
				console.log(errorResponse);
			});
		};

        $scope.loadTodos();
  }]);
