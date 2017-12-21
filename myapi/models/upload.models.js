var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var UploadSchema = new Schema({
	cateId:ObjectId,
	fieldname:String,
	originalname:String,
	encoding:String,
	mimetype:String,
	destination:String,
	filename:String,
	path:String,
	size:String,
	date: { type: Date, default: Date.now },
	cateId: ObjectId
})

UploadSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('upload',UploadSchema,'upload');