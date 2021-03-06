const mongoose = require("mongoose");

var cwcSchema = new mongoose.Schema({
  cwc_id: {
    type: String,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  chairman_id: {
    type: String, //employee_id from the cwcEmployeeSchema
  },
  registeredBy: {
    type: String,
  },
  dateOfRegistration: {
    type: String,
  },
  count: {
    type: Number,
  },
  strength: {
    type: Number,
  },
});

module.exports = mongoose.model("Cwc", cwcSchema);
