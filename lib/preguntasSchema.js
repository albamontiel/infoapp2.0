const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preguntasSchema = new Schema({
	pregunta: String,
	palabraClave:String

});

module.exports = mongoose.model("preguntasSchema", preguntasSchema);
