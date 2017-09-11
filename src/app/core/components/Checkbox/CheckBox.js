(function () {
    'use strict';

    angular
        .module('app')
        .directive('appCheckbox', directive);

    /** @ngInject */
    function directive() {

        return {
            template: '<section class="app-checkbox">' +
            '    <div class="row">' +
            '      <div class="small-12 columns">' +
            '       <div class="label-wrapper">' +
            '         <div class="text-label">{{label}}</div>' +
            '       </div>' +
            '        <div class="input-wrapper">' +
            '           <label for="{{id || \'id\' + label }}"><input id="{{id || \'id\' + label }}" type="checkbox" name="{{name}}" placeholder="{{placeholder}}" ng-model="ngModel"/> ' +
            '<span class="check-text " ng-class="{bold: bold}">{{text}}</span> </label>' +
            '             <div class="bottom-hint" ng-show="bottomhint">{{bottomhint}}</div>' +
            '             <div ng-transclude></div> ' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '  </section>',
            //templateUrl: "/app/app-common/components/InputBox/template.html",
            restrict: 'E',
            require: '?ngModel',
            transclude: true,
            replace: true,
            link: postLink,
            scope: {
                id: "=",
                label: "=",
                ngModel: "=",
                placeholder: "=",
                hint: "=",
                text: "=",
                name: "=",
                bold: "=",
                bottomhint: "="
            }
        };

        /** @ngInject */
        function postLink(element, attrs) {

            var input = angular.element(element).find('input');

            if (attrs.required) {
                input.attr('required', "required");
            }

            if (attrs.step) {
                input.attr('step', attrs.step);
            }

        }

    }

})();
