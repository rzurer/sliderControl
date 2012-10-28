'use strict';
function initialize(app, model) {
    app.get('/', function (req, res) {
        model.catalog.getAllCatalogs(function (catalogs) {
            res.render('slider', {catalogs : catalogs});
        });        
    });
}
exports.initialize = initialize;