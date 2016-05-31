angular.module('directivePractice').directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    link: function(scope, element, attributes) {
      console.log(scope, element, attributes)
    }
  };
});
