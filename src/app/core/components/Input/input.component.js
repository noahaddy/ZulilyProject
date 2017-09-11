(function () {
    'use strict';


    angular
        .module('app')
        .component('appInput', {
            templateUrl: 'app/core/components/Input/input.html',
            bindings: {
                id: "=",
                label: "=",
                ngModel: "=",
                type: "=",
                placeholder: "=",
                hint: "=",
                bottomhint: "=",
                readonly: "=",
                name: "=",
                required: "=",
                klass: "=",
                minLength: "=",
                maxLength: "=",
                pattern: "=",

                options : "="
            }

    });

})();
