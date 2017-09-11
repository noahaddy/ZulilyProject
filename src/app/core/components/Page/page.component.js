(function () {
    'use strict';

    angular
        .module('app')
        .component('appPage', {
            templateUrl: 'app/core/components/Page/page.component.html',
            replace: true,
            transclude: {
                //commands: '?trCommands'
                customCommands: '?customCommands'
            },
            bindings: {
                klass: '=',
                ttl: '=',
                ttl2: '=',
                subtitle: '=',
                description: '=',
                microtext: '=',
                badge: "=",
                badgeclass: "=",
                commands: "=",

                onDelete : "&"
            }
    });

})();
