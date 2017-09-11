//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './', //was './app'

        files: [
            'test/**/*.js',

            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.js',

            'bower_components/firebase/firebase.js',
            'bower_components/angularfire/dist/angularfire.js',

            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/quill/dist/quill.js',
            'bower_components/ngQuill/src/ng-quill.js',
            'bower_components/ng-file-upload/ng-file-upload.js',
            'bower_components/ng-file-upload-shim/ng-file-upload-shim.js',

            'bower_components/what-input/dist/what-input.js',
            'bower_components/foundation-sites/dist/js/foundation.js',
            'bower_components/slick-carousel/slick/slick.js',
            'bower_components/moment/moment.js',
            'bower_components/amplify/lib/amplify.js',
            'bower_components/lodash/lodash.js',
            'bower_components/angular-mocks/angular-mocks.js',

            //'components/**/*.js',
            //'view*/**/*.js'

            'test/mocks/*.js',

            //'src/app/app-payments-and-subscriptions/**/*.js'
            'src/app/**/*.module.js',
            'src/environment-settings/environment.dev.js',
            'src/app/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
