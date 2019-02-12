const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventosSchema = new Schema({
	proyecto: String,
	palabraClave:String,
  fecha:String

});

module.exports = mongoose.model("eventosSchema", eventosSchema);
