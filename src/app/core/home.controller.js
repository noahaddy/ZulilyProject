(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', controller);

    /** @ngInject */
    function controller(ProductService) {
        var vm = this;

        init();

        function init() {

            vm.prods = ProductService.getProductsByUserPreferences();

        }



    }
})();
