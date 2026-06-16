import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: String,
  email: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.plugin(autopopulate);

export const Admin = mongoose.model("Admin", adminSchema);
