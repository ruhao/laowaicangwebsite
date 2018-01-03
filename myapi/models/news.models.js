var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
	title:String,
	telephone:Number,
	content:String,
	name:String,
	cateId: ObjectId,
	date: { type: Date, default: Date.now }
})

NewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('news',NewsSchema,'news');