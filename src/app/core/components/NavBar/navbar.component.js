(function () {
    'use strict';

    angular
        .module('app')
        .component('appNavBar', {
            templateUrl: 'app/core/components/NavBar/navbar.component.html',
            transclude: {
                navBarLeft: "?navBarLeft",
                navBarMiddle: "?navBarMiddle",
                navBarRight: "?navBarRight"
            },
            bindings: {
                title: "=",
                title2: "=",
                prepromo: "=",
                promo: "=",
                subtitle: "=",
                showlogo: "=",
                links: "=",
                ctalinks : "=",

                klass: '='
            }
        }

    )
})();
