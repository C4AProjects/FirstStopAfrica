var app = angular.module("buymore", ['ui.router', 'restangular', 'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'leaflet-directive'
]);

app.config(function(RestangularProvider) {
  // RestangularProvider.setBaseUrl('http://new.buymore.co.ke');
  //  RestangularProvider.setRequestSuffix('.json');
});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'First Stop Africa';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);
;// I control the main demo.
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
;// app.directive("header", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/header.html"
//     }
// });
// app.directive("head", function () {
//     return {
//         templateUrl: "../ng_app/partials/directives/head.html"
//     }
// });

app.directive("footer", function() {
  return {
    templateUrl: "app/partials/directives/footer.html"
  }
});

app.directive('isActiveNav', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}]);
;app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  /**
   * Default Route
   * @param  {[type]} "/account/expenditure" [description]
   * @return {[type]}                        [description]
   */
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  /**
   * Public State  :: Currently Depricated
   * @param  {[type]} 'public'     [description]
   * @param  {[type]} {                                                             url: '/' [description]
   * @param  {[type]} views:       {                                                                       '': {                       controller: 'aboutCtrl' [description]
   * @param  {[type]} templateUrl: 'app/partials/public/home.html' [description]
   * @param  {[type]} }                                                             }                          } [description]
   * @return {[type]}              [description]
   */
  $stateProvider.state('home', {
    url: '/home',
    views: {
      '': {
        controller: 'homeCtrl',
        templateUrl: 'app/partials/home/index.html',
      },
      'header@home': {
        templateUrl: 'app/partials/home/header.html',
      },
      'about@home': {
        templateUrl: 'app/partials/home/about.html',
      },
      'carousel@home': {
        templateUrl: 'app/partials/home/carousel.html',
      },
      'email@home': {
        templateUrl: 'app/partials/home/email.html',
      },
      'phone@home': {
        templateUrl: 'app/partials/home/phone.html',
      },
      'images@home': {
        templateUrl: 'app/partials/home/images.html',
      }
    }
  });

});
;angular.module('templates-dist', ['../public/app/partials/directives/footer.html', '../public/app/partials/directives/head.html', '../public/app/partials/home/about.html', '../public/app/partials/home/carousel.html', '../public/app/partials/home/email.html', '../public/app/partials/home/header.html', '../public/app/partials/home/images.html', '../public/app/partials/home/index.html', '../public/app/partials/home/phone.html']);

angular.module("../public/app/partials/directives/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/directives/footer.html",
    "<nav class=\"navbar navbar-default footer\">\n" +
    "  \n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/directives/head.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/directives/head.html",
    "");
}]);

angular.module("../public/app/partials/home/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/about.html",
    "");
}]);

angular.module("../public/app/partials/home/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/carousel.html",
    "<carousel interval=\"myInterval\">\n" +
    "      <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "        <p ng-bind-html=\"slide.text\"></p>\n" +
    "      </slide>\n" +
    "</carousel>\n" +
    "");
}]);

angular.module("../public/app/partials/home/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/email.html",
    "<form action=\"\">\n" +
    "  <p class=\"centered\">Subscribe now for updates, deals and promotions.</p>\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button class='btn btn-blue'><i class='ion-email'></i>Subscribe</button>\n" +
    "      </span>\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("../public/app/partials/home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/header.html",
    "<nav id=\"main\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <img id=\"logo\" src=\"images/FirstStop_Logo.png\" alt=\"Logo\">\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/home/images.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/images.html",
    "<img class=\"small\" src=\"images/FirstStop_Grid_1.png\" alt=\"\">\n" +
    "<img class=\"large\" src=\"images/FirstStop_Grid_2.png\" alt=\"\">\n" +
    "<img class=\"small\" src=\"images/FirstStop_Grid_3.png\" alt=\"\">\n" +
    "");
}]);

angular.module("../public/app/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/index.html",
    "<div id=\"main_content\">\n" +
    "  <header ui-view=\"header\"></header>\n" +
    "  <div id=\"carousel-bar\"></div>\n" +
    "  <div ui-view=\"carousel\" id=\"carousel\"></div>\n" +
    "</div>\n" +
    "<div id=\"secondary_content\">\n" +
    "  <div class=\"bar\"></div>\n" +
    "\n" +
    "  <div id=\"image-set\" ui-view=\"images\"></div>\n" +
    "  <div class=\"bar-main\">\n" +
    "      <div id=\"phone\" ui-view=\"phone\"></div>\n" +
    "      <div ui-view=\"email\" id=\"email\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/home/phone.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/phone.html",
    "<img src=\"images/FirstStop_Phone.png\" alt=\"\">\n" +
    "");
}]);
