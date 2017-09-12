
(function () {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) { //


        $stateProvider
            .state('app', {        //parent state
                url: '/app',
                templateUrl: 'app/core/app.html',
                controller: 'AppController',
                controllerAs: 'vm',
                resolve: {
                    currentUserPromise: function(Startup){
                        return Startup.init();

                    }
                }
            })
            .state('app.home', {
                url: '^/home',
                templateUrl: 'app/core/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('app.signup', {
                url: '/signup',
                templateUrl: 'app/core/signup.html',
                controller: 'SignupController',
                controllerAs: 'vm'
            })
            .state('app.login', {
                url: '/login',
                templateUrl: 'app/core/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('app.setpreferences', {
                url: '/setpreferences',
                templateUrl: 'app/core/setpreferences.html',
                controller: 'SetPreferencesController',
                controllerAs: 'vm'
            })
            .state('app.products', {
                url: '/products/:category',
                templateUrl: 'app/core/products.html',
                controller: 'ProductsController',
                controllerAs: 'vm'
            })
            .state('app.logout', {
                url: '^/logout',
                controller: 'LogoutController',
                controllerAs: 'vm'
            })

        ;

        //Default State
        $urlRouterProvider.otherwise('/home');
    }

})();
