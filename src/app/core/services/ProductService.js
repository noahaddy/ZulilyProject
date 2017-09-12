(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProductService', factory);

    /** @ngInject */
    function factory(FireBaseDataService, Session, $q) {

        var popularProductCategories = { women: true, men: true, girls: true };

        return {
            getProductsByCategory: function (category) {
                return FireBaseDataService.productsByCategory(category);
            },
            getProductsByUserPreferences: function(){
                var products = {};

                //if user's not signed in, show common product categories
                var userPreferences = Session.currentUser() ? Session.currentUser().preferences : popularProductCategories;

                //if user has no preferences, show popular products;
                if(!userPreferences){
                    userPreferences = popularProductCategories;
                }

                Object.keys(userPreferences).forEach(function(key){
                   products[key] =  FireBaseDataService.productsByCategory(key);

                });

                return products;
            },


        };
    }
})();
