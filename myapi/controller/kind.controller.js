var mongoose = require("mongoose")
const DataModel = require("../models/kind.models")

exports.create = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	console.log(req.params)
	datamodel.save().then(
		data => {
			res.json(data)
		}
	)
}

exports.lists = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	datamodel.find().then(data => {
		res.json(data)
	})
}

