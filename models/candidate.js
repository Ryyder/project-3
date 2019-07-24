const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }

    name: { type: String, required: true },
	age: { type: Number, required: true },
	party: { type: String, required: true },
	president_nominee: { type: Boolean, required: true },
	cur_position: { type: String, required: true },
    yrs_served: { type: Number, required: true },
    // Documentation of updating/pushing with this schema declaration
    //  https://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index
    summary: { type : Array , "default" : [] }
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
