const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conceptosSchema = new Schema({
	palabraClave: String,
	definicion:String,
  contexto:String

});

module.exports = mongoose.model("conceptosSchema", conceptosSchema);
