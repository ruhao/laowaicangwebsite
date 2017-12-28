var mongoose = require("mongoose")
var DataModel = require("../models/hr.models")

exports.create = function(req, res, next) {
	const datamodel = new DataModel(req.body)
	datamodel.save().then(
		data => {
			res.json(data)
		}
	)
}

exports.list = function(req, res, next) {
	var page = (req.body.page) ? req.body.page : 1;
	var limit = (req.body.limit) ? req.body.limit : 10;

	var queryCondition = {};
	if(req.body.name && req.body.name.trim().length > 0) {
		name = req.body.name;
		queryCondition = {
			name: new RegExp(name, "i")
		}
	}
	if(req.body.cateid && req.body.cateid.trim().length > 0) {
		
		cateid = req.body.cateid;
		console.log(cateid)
		queryCondition = {
			cateid: new RegExp(cateId, "i")
		}
	}
	
	DataModel.paginate(queryCondition,{sort:{_id:-1},page:parseInt(page),limit:parseInt(limit)},function(err,result){
		
		result.rows=result.docs;
		delete result.docs;
		
		res.json(result)
	})

}

exports.remove=function(req,res,next){
	const id = req.params.id;
	User.findByIdAndRemove(id, function(err, data) {
		res.json(data)
	})
}

exports.update = function(req, res, next) {
	const id = req.params.id;
    console.log(id)
	User.findByIdAndUpdate(id, { $set: req.body }, { new: false })
		.then(data => {
			res.json(data)
		})
}