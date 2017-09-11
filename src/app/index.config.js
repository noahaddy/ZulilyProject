(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    /** @ngInject */
    function config($locationProvider, $logProvider, $httpProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        $locationProvider.hashPrefix('');

    }

})();
