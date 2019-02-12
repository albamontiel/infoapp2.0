const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const integrantesSchema = new Schema({
	pregunta: String,
	palabraClave:String

});

module.exports = mongoose.model("integrantesSchema", integrantesSchema);
