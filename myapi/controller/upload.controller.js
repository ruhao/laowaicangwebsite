var mongoose = require('mongoose');
var multer = require('multer')
var path = require('path')
const DateModel = require('../models/upload.models');

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './upload')
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

exports.upload = function(req, res, next) {
	var cateId=req.params.cateId
	
	var upload = multer({
		storage: storage
	}).single('avatar');
	upload(req, res, function(err) {
		const dateModel = new DateModel(req.file);
		dateModel.cateId=cateId
		dateModel.save()
			.then(data => {
				res.json(data);
			})
		res.end('File is uploaded')
	})
}

exports.uploads = function(req, res, next) {
	
	var upload = multer({
		storage: storage
	}).single('avatar');
	upload(req, res, function(err) {
		const dateModel = new DateModel(req.file);
		dateModel.save()
			.then(data => {
				res.json(data);
			})
		res.end('File is uploaded')
	})
}

exports.lists = function(req, res, next) {

	DateModel.find({}, function(err, data) {
		res.json(data);
	})
}