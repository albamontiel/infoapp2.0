// UserSchema.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proyectosSchema = new Schema({
	nombre: String,
	descripción:String,
	palabraClave:String

});

module.exports = mongoose.model("proyectosSchema", proyectosSchema);
