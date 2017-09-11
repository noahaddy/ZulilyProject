(function () {
    'use strict';

    //Start angular setup
    angular
        .module('app', [
            'ngMessages',
            'ngResource',
            'ngSanitize',

            'firebase',
            'ui.router'

        ]);

})();


