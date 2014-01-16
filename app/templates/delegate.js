'use strict';


module.exports = {

    configure: function configure(nconf, next) {
        // Async method run on startup
        next(null);
    },


    requestStart: function requestStart(server) {
        // Run before most express middleware has been registered
    },


    requestBeforeRoute: function requestBeforeRoute(server) {
        // Run before any routes have been added
    },


    requestAfterRoute:  function requestAfterRoute(server) {
        // Run after all routes have been added
    }

};