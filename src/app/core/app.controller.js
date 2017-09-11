(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', controller);

    /** @ngInject */
    function controller($scope, $timeout) {
        var vm = this;

        init();

        function init() {


        }

        $timeout(function(){

        });


    }

})();
