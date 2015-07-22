angular.module('templates-dist', ['../public/app/partials/directives/footer.html', '../public/app/partials/directives/head.html', '../public/app/partials/home/about.html', '../public/app/partials/home/carousel.html', '../public/app/partials/home/email.html', '../public/app/partials/home/header.html', '../public/app/partials/home/images.html', '../public/app/partials/home/index.html', '../public/app/partials/home/phone.html']);

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
