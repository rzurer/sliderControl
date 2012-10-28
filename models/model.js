"use strict";
var catalogmodel = require('./catalogmodel'),
	initialize = function (mongoose, url) {
		var Schema = mongoose.Schema;
		catalogmodel.initialize(mongoose, Schema);
	    mongoose.connect(url);
	};
exports.initialize = initialize;
exports.catalog = catalogmodel;
