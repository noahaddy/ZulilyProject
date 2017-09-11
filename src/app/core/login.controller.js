(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', controller);

    /** @ngInject */
    function controller($scope, AuthService, $firebaseArray, $state) {
        var vm = this;

        init();

        function init() {
            vm.creds = { email: "", password: ""};
        }

        vm.login = function () {
            AuthService.login(vm.creds.email, vm.creds.password)
                  .then(function(){

                      var prefRef = firebase.database().ref()
                          .child("USERS").child(firebase.auth().currentUser.uid).child("preferences");

                       var preferences =  $firebaseArray(prefRef);

                      preferences.$loaded()
                          .then(function(data) {
                              //if user has preferences
                              if(data.length > 0){
                                  $state.go("app.home");
                              }else{
                                  //Force user to update prefs
                                  $state.go("app.setpreferences");
                              }

                          })
                          .catch(function(error) {
                              console.error("Error:", error);
                          });


                      // Startup.init()
                        //     .then(function(){
                        //         EventBus.emit(EventBus.events.auth.login);
                        //
                        //        // $scope.$apply();
                        //     });
                      //$scope.$apply();


                })
                .catch(function(err){
                    $log.debug("Error caught in login controller...", err);
                });
        };
    }
})();
