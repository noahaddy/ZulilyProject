(function () {
    'use strict';

    angular
        .module('app')
        .controller('LogoutController', controller);

    /** @ngInject */
    function controller($scope, $state, AuthService,  Startup) {
        //var vm = this;

        init();

        function init() {

            AuthService.logout()
            .then(function () {

                Startup.clearAuthSessions();
                $state.go("app.home");
            });
        }


    }
})();

