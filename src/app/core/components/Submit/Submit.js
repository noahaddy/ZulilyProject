(function () {
    'use strict';

    angular
        .module('app')
        .directive('appSubmit', directive);

    /** @ngInject */
    function directive($timeout) {

        return {
            templateUrl: 'app/core/components/Submit/submit.html',
            restrict: 'E',
            replace: true,
            scope: {
                klass: '=',
                txt: '=',
                text: '='
            },
            link: function(scope, element) { //attrs
                var $button = angular.element(element).find(".button");
                var buttonText = scope.txt || "Submit";

                $button.bind('click', function() {

                    $timeout(function() {
                        $button.attr('disabled', true);
                        $button.val("Processing...");

                        resetButton();
                    }, 0);
                });

                function resetButton(){
                    $timeout(function() {
                        $button.removeAttr('disabled');
                        $button.val(buttonText);
                    }, 3000);
                }
            }
        };

    }

})();
