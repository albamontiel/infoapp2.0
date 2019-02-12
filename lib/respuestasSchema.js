// UserSchema.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const respuestasSchema = new Schema({
	concepto1: String,
	concepto2:String,
	concepto3:String

});

module.exports = mongoose.model("respuestas", respuestasSchema);
