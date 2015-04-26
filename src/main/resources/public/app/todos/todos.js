appModul.controller('TodosController', function ($scope, Todo) {
  $scope.todos = Todo.query();

  $scope.removeTodo = function (todo) {
    todo.$remove(function () {
      $scope.todos = Todo.query();
    });
  };

});
