"use strict";
var catalogmodel = require('./catalogmodel'),
	countrymodel = require('./countrymodel'),
	stampmodel = require('./stampmodel'),
	initialize = function (mongoose, url) {
		var Schema = mongoose.Schema,
			ObjectId = Schema.ObjectId,
			ImageInfoSchema = new Schema({
				_id :  { type: String, required: true },
				stampId: { type: ObjectId, required: true },
				imgSeekId : Number,
				originalUrl : String,
				url: { type: String, required: true },
				width: { type: String, min: 0 },
				height: { type: String, min: 0 },
				caption: String
			}),
			IdentifierSchema = new Schema({
				catalog: { type: ObjectId, required: true },
				name: { type: String, required: true },
				wmk: { type: String},
				value: { type: String}
			}),
			DisplayPropertySchema = new Schema({
				name: { type: String, required: true },
				value: { type: String, required: true }
			});
		catalogmodel.initialize(mongoose, Schema);
		countrymodel.initialize(mongoose, Schema);
		stampmodel.initialize(mongoose, Schema, ObjectId, countrymodel.CurrencySchema, ImageInfoSchema, IdentifierSchema, DisplayPropertySchema);
	    mongoose.connect(url);
	};
exports.initialize = initialize;
exports.catalog = catalogmodel;
exports.stamp = stampmodel;
