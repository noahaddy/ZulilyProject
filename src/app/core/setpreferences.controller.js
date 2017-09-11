(function () {
    'use strict';

    angular
        .module('app')
        .controller('SetPreferencesController', controller);

    /** @ngInject */
    function controller(firebase, $firebaseArray, $state) {
        var vm = this;
        var root = firebase.database().ref();
        var productCategoriesRef = root.child("PRODUCT_CATEGORIES");

        var userPreferences = {};

        init();

        function init() {
            vm.preferences = $firebaseArray(productCategoriesRef);
        }

        vm.selected = function(pref){
            if(pref.selected){
                userPreferences[pref.$id] = true;
            }else{
                delete userPreferences[pref.$id];
            }
        };

        vm.save = function(){
            if(Object.keys(userPreferences).length > 0) { //user has selected preferences

                //Save preferences
                root.child("USERS").child(firebase.auth().currentUser.uid).child("preferences").set(userPreferences)
                    .then(function () {
                        $state.go("app.home");
                    });
            }else{
                $state.go("app.home");
            }
        };


    }
})();
