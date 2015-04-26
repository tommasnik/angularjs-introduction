var appModul = angular.module('angularjs-introduction',
  [
    'ui.router',
    'ngResource'
  ]);

appModul.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/todos");
  // Set up the states
  $stateProvider
    .state('layout', {
      abstract: true,
      templateUrl: 'app/layout/layout.html'
    })
    .state('todos', {
      parent: 'layout',
      url: '/todos',
      controller: 'TodosController',
      templateUrl: 'app/todos/todos.html'
    })
    .state('create-todo', {
      parent: 'layout',
      url: '/todo/new',
      controller: 'EditTodoController',
      templateUrl: 'app/todos/edit-todo.html'
    })
    .state('edit-todo', {
      parent: 'layout',
      url: '/todo/:id/edit',
      controller: 'EditTodoController',
      templateUrl: 'app/todos/edit-todo.html'
    });
});


