(function () {
    'use strict';

    angular
        .module('app')
        .directive('appHerostacked', directive);

    /** @ngInject */
    function directive() {

        return {
            templateUrl: 'app/core/components/HeroStacked/heroStacked.html',
            scope: {
                intro: "=",
                ttl: "=",
                ttl2: "=",
                subtitle: "=",
                image: "=",
                text: "=",
                cta: "=",
                ctalink: "=",
                ctaklass: "=",
                klass: "=",
                slots: "="
            }
        };
    }

})();
