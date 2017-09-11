(function () {
    'use strict';

    angular
        .module('app')
        .controller('SignupController', controller);

    /** @ngInject */
    function controller(firebase, $state) {
        var vm = this;
        var root = firebase.database().ref();
        var usersRef = root.child("USERS");

        init();

        function init() {
            vm.creds = { email: "", password: ""};
            vm.user = { firstName: "", lastName: "" };
        }

        vm.signup = function () {
            console.log(vm.creds);

            return firebase
                .auth()
                .createUserWithEmailAndPassword(vm.creds.email, vm.creds.password)
                .then(function(authUser){
                    return usersRef.child(authUser.uid).child("userInfo").set({
                        email: vm.creds.email,
                        firstName: vm.user.firstName,
                        lastName: vm.user.lastName
                    });

                })
                .then(function(authuser){
                    $state.go("app.setpreferences");
                });

        };
    }
})();
