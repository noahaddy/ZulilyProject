(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', factory);

    /** @ngInject */
    function factory(FireBaseDataService, $q) {

        return {
            getLoggedInUserProfile: function (id) {
                var that = this;

                var profile = {
                    userId: id,
                    userInfo: null,
                    userPreferences: null,
                };

                return that.userData(id)
                    .then(function (userData) {
                        profile.userInfo = userData.userInfo;
                        profile.userPreferences = userData.preferences;

                        return $q.when(profile);
                    })

            },
            userData: function(uid){
                return FireBaseDataService.userInfo(uid).$loaded();
            }

        };
    }
})();
