var mongoose = require("mongoose")
var DataModel = require("../models/admin.models")

exports.create = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	datamodel.save().then(
		data => {
			res.json(data)
		}
	)
}

exports.find = function(req, res, next) {
	var id = req.params.id;
	const datamodel = new DataModel(req.body)
	datamodel.findById(id, function(err, data) {
		res.json(data);
	})
}