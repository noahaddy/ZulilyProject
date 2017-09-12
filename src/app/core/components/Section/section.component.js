(function () {
    'use strict';

    angular
        .module('app')
        .directive('appSection', directive);

    /** @ngInject */
    function directive() {

        return {
            templateUrl: 'app/core/components/Section/section.component.html',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                intro: "=",
                ttl: "=",
                subtitle: "=",
                lighttext: "=",
                desc: "=",
                cta: "=",
                ctaoptions: "=",
                image: "=",
                featured: "=",
                klass: "="
            }
        };

    }

})();
