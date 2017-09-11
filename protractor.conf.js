//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'e2e/**/*.js'
    ],

    //Test suites run by suites... protractor conf.js --suite=smoke
    suites: {
        smoke: './smoke/*.spec.js', //smoke tests
        onboarding: ''
    },

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
