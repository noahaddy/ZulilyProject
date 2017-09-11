(function () {
    'use strict';

    angular
        .module('app')
        .component('appProduct', {
            templateUrl: 'app/core/components/Product/product.component.html',
            bindings: {
                ttl: "=",
                price: "=",
                image: "=",
                category: "=",

                klass: '='
            }
        }

    )
})();
