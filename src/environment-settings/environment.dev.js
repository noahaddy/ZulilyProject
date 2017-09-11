(function () {
    'use strict';

    angular
        .module('app')
        .constant('ENV', {
            env: "DEV",
            firebaseConfig: {
                apiKey: "AIzaSyASPTFcDKTPg5iV94uS-28jTbdupXLwZCI",
                authDomain: "zulilyproject.firebaseapp.com",
                databaseURL: "https://zulilyproject.firebaseio.com",
                projectId: "zulilyproject",
                storageBucket: "",
                messagingSenderId: "841276353745"
            }
        });

})();
