(function () {
    'use strict';

    angular
        .module('app')
        .factory('Startup', factory);

    /** @ngInject */
    function factory(
        $rootScope,
                      Session,
                      UserService,
                     // EventBus,
                      firebase,
                      $q,
                      $log

    ){

        var firebaseUserPromise,
            currentUserPromise;

        function init() {
            $log.log("Startup init()...");

            return getFirebaseUser()
                .then(fetchUserProfileInfo)
                .catch(logErrorAndSignout);
        }

        function getFirebaseUser() {
           if(firebaseUserPromise){
               $log.log("CACHED: returned cached firebaseUser - firebaseUserPromise");
               return firebaseUserPromise;
           }

            var deferred = $q.defer();
            $log.log("subscribing to authStateChagned Event");

            firebase.auth().onAuthStateChanged(function (user) {
                $log.log("Fired: authStateChagned Event");

                if (user) {

                    $log.log("Inside...: authStateChagned Event --> user available");
                    deferred.resolve(user);
                    firebaseUserPromise = $q.when(user);

                } else {

                    $log.log("Inside...: authStateChagned Event --> no user available");
                    deferred.reject('DEFER: unable to fetch firebase user... ');

                }
            });

            return deferred.promise;

        }



        function fetchUserProfileInfo(fbUser, options) {

            //cache promise to currentUser -- to user in AppState resolve
            if (currentUserPromise) {
                $log.log("CACHED: returned cached resolve promise - currentUserPromise");
                return currentUserPromise;
            }

            fbUser || firebase.auth().currentUser;


            $log.log("Fetching user profile...");
            //$log.debug("SessionState: setting up get logged-in userProfile...");
            return UserService
                .getLoggedInUserProfile(fbUser.uid, options)
                .then(function (profileData) {
                    console.log("profile data, ", profileData);
                    Session.setupSessionProfile(profileData);


                    //EventBus.emit(EventBus.events.STARTUP.USER_PROFILE_FETCHED);
                    //$rootScope.$apply();

                    currentUserPromise = $q.when(Session.currentUser());
                    return currentUserPromise;

                })
                .catch(logErrorAndSignout);
        }

        function logErrorAndSignout(err) {

            $log.error("Error fetching user profile...", err);
            //EventBus.emit(EventBus.events.auth.noauthuser);

             firebase.auth().signOut();
             //.then(function () {
            //     // Sign-out successful.
            //     $log.info("signout successful");
            // }, function (error) {
            //     // An error happened.
            //     $log.error("logErrorAndSignout()", error);
            // });
        }


        function clearAuthSessions(){
                $log.info("destroying user sessions");
                Session.currentUser(null);
                currentUserPromise = null;
                firebaseUserPromise = null;
        }

        return {
            init: function () {

                return init();
            },
             fetchUserProfileInfo: fetchUserProfileInfo,
            clearAuthSessions: clearAuthSessions

        };

    }
})();
