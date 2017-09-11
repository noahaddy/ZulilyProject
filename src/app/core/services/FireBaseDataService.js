
(function() {
    'use strict';

    angular
        .module('app')
        .factory('FireBaseDataService', factory);

    /** @ngInject */
    function factory(
                     firebase,
                     $firebaseObject,
                     $firebaseArray,
                     ENV) {

        firebase.initializeApp(ENV.firebaseConfig);

        var rootRef = firebase.database().ref();

        var productCategoriesRef = rootRef.child("PRODUCT_CATEGORIES");
        var productsRef = rootRef.child("PRODUCTS");
        var usersRef = rootRef.child("USERS");


        return {
            //References
            rootRef: rootRef,
            productCategoriesRef :  productCategoriesRef,
            usersRef: usersRef,
            userRef: function(uid){
               return usersRef.child(uid);
            },

            productCategories: $firebaseArray(productCategoriesRef),
            userInfo: function(uid){
                return $firebaseObject(usersRef.child(uid));
            },
            productsByCategory: function(category){
                return $firebaseArray(productsRef.child(category));
            }

        };
    }
})();

