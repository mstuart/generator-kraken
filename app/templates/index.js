'use strict';


var kraken = require('kraken-js'),
    delegate = require('./delegate');


kraken.create(delegate).listen(function (err) {
    if (err) {
        console.error(err.stack);
    }
});
