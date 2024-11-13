import mongoose from "mongoose";

const subjectSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    total_classes: {
        type: Number,
        required: true
    },
    missed_classes: {
        type: Number,
        default: 0
    },
    total_units: {
        type: Number,
        required: true
    },
    completed_units: {
        type: Number,
        default: 0
    },
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    }]
  },
  {
    timestamps: true,
  }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;