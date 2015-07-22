app.config(function($stateProvider, $urlRouterProvider) {

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
