import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

employeeSchema.plugin(autopopulate);

export const Employee = mongoose.model("Employee", employeeSchema);
