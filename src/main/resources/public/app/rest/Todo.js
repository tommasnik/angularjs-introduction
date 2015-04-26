appModul.factory('Todo', function ($resource) {
  return $resource('/todo/:id', {id: '@id'});
});