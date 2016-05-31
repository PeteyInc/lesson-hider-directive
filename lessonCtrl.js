angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {
  $scope.me = "Jared";
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = "Two way data binding!";
});
