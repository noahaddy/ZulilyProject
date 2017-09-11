(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthService', factory);

    /** @ngInject */
    function factory(firebase) {

        return {

            login: function (email, password) {
                return firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    //.catch(ErrorService.errorHandler);
            },

            logout: function () {

                return firebase.auth()
                    .signOut()
                    //.catch(ErrorService.errorHandler);
            }

        }
    }

})();
