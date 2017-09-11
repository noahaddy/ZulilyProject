(function () {
    'use strict';

    angular
        .module('app')
        .factory('Session', factory);

    /** @ngInject */
    function factory($rootScope, $q, $log) {

        function setupSessionProfile(profileData) {
            $log.debug("logged in profile data... is..", profileData);

            //Setup User
            var user = profileData.userInfo;
            user.userId = profileData.userId;
            user.preferences = profileData.userPreferences;
            currentUser (user);

            //Let's promisify it...
            return $q.when(profileData);

        }

        function currentUser(user) {

            if (user) {
                $rootScope.currentUser = user;
                $rootScope.currentUser.name = user.firstName + " " + user.lastName;
                return;
            }

            if (user === null) {
                $rootScope.currentUser = null;
                return;
            }
            return $rootScope.currentUser

        }

        return {
            currentUser: currentUser,
            setupSessionProfile: setupSessionProfile

        };

    }
})();
