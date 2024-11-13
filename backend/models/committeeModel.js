import mongoose from "mongoose";

const committeeSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    number_of_events: {
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Committee = mongoose.model("Committee", committeeSchema);

export default Committee;