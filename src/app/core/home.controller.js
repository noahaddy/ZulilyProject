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

            vm.men = ProductService.getProductsByCategory("men");
            vm.women = ProductService.getProductsByCategory("women");
            vm.shoes = ProductService.getProductsByCategory("shoes");

        }

    }
})();
