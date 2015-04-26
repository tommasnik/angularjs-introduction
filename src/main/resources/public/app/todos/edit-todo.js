appModul.controller('EditTodoController', function ($scope, Todo, $state, $stateParams) {
  if ($state.includes('create-todo')) {
    $scope.todo = new Todo();
  } else {
    $scope.todo = Todo.get({id: $stateParams.id});
  }

  $scope.submitForm = function() {
    if ($scope.todoForm.$valid) {
      $scope.todo.$save(function() {
        $state.go('todos');
      });
    }
  }


});
