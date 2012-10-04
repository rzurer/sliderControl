'use strict';
function initialize(app, model) {
    app.get('/', function (req, res) {
        var id, userId, stamp;
        id = "4fc3644152a060300c0002b5";
        userId = "4f897629d9d3d80d0c00005d";
        stamp = model.stamp.getStamp(userId, id, function (stamp) {
            model.catalog.getAllCatalogs(function (catalogs) {
                res.render('identifiers', {stamp: stamp, catalogs : catalogs});
           });
        });
    });
}
exports.initialize = initialize;