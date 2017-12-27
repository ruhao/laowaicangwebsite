var mongoose = require("mongoose");
var mongooseMaterialized = require("mongoose-materialized");
var Schema = mongoose.Schema;

var ObjectId=Schema.ObjectId

var KindSchema = new Schema({
	text:String,
	cateId:ObjectId,
})
KindSchema.plugin(mongooseMaterialized)
var Kind = mongoose.model('Kind',KindSchema,'kind')
module.exports=Kind;

