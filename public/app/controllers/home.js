// I control the main demo.
app.controller("homeCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {

    scope.slides = [{
      text: "<h3>We're in flight and arriving soon!</h3> <p>Your First Stop for Inspiration bt the latest news, trends, reviews in African Travel and Lifestyle.</p>"
    }, {
      text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      text: 'Ut enim ad minim veniam.'
    }];
  }
]);
