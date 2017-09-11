(function () {
    'use strict';

    angular
        .module('app')
        .run(runBlock)

    /** @ngInject */
    function runBlock($rootScope, firebase, ENV, Startup, $log) {

        //Set environment
        $rootScope.env = ENV.env;

        $log.debug('runBlock end'); //debug, error, info, warn
        $log.log(ENV.env);

        //firebase.initializeApp(ENV.firebaseConfig);


        //Startup.init();

    }



})();
