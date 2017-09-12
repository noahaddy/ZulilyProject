(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', controller);

    /** @ngInject */
    function controller(FireBaseDataService) {
        var vm = this;

        init();

        function init() {
            vm.links = FireBaseDataService.productCategories;

        }

    }

})();
