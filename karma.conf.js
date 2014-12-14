module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/assets/libs/angular/angular.js',
      'app/assets/libs/angular-ui-router/release/angular-ui-router.js',
      'app/assets/libs/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
