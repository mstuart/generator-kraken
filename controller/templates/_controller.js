'use strict';


var <%= _.capitalize(_.classify(name)) %>Model = require('../models/<%= name %>');


module.exports = function (app) {

    var model = new <%= _.capitalize(_.classify(name)) %>Model();


    app.get('/<% if (name !== "index") { %><%= _.slugify(name) %><% } %>', function (req, res) {
        <% if (json) { %>
        if (req.xhr && req.accepts('json')) {
            res.json(model);
        } else {
            res.render('<%= _.slugify(name) %>', model);
        }
        <% } else { %>
        res.render('<%= _.slugify(name) %>', model);
        <% } %>
    });

};
