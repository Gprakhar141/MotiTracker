import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    submission_date: { 
        type: Date
    }
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;