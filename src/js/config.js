// Require.js configuration for the application:
require.config({
    baseUrl:"./js",


    // Configuring libraries aliases (shortcuts)
    paths: {
        'jquery'                : 'vendor/jquery/dist/jquery',
        'jqueryPubsub'          : 'vendor/jquery-pubsub/jquery.pubsub',
        'underscore'            : 'vendor/underscore/underscore',
        'backbone'              : 'vendor/backbone/backbone',
        'marionette'            : 'vendor/marionette/lib/backbone.marionette',
        'backbone.babysitter'   : 'vendor/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr'        : 'vendor/backbone.wreqr/lib/backbone.wreqr',
        'w2ui'                  : 'vendor/w2ui/w2ui-1.3',
        'text'                  : 'vendor/requirejs-text/text',
        'moment'                : 'vendor/moment/moment'
    },


    shim : {
        'backbone'              : { exports: 'Backbone', deps: ['underscore', 'jquery'] },
        'marionette'            : { exports: 'Marionette', deps: ['underscore', 'backbone', 'jquery'] },
        'jasmine'               : { exports: 'jasmine' },
        'underscore'            : { exports: '_' },
        'w2ui'                  : { deps: ['jquery'] },
        'jqueryPubsub'          : { deps: ['jquery'] },
        'moment'                : { exports : 'moment' }
    }
});

// Kick off the main application
require(['app'], function(App){
    var app = new App();
    app.start();
})