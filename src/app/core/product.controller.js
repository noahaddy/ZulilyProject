(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProductsController', controller);

    /** @ngInject */
    function controller($stateParams, ProductService) {
        var vm = this;

        init();

        function init() {
            vm.category = $stateParams.category;

            vm.products = ProductService.getProductsByCategory($stateParams.category);

        }



    }
})();
