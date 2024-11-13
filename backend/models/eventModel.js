import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: ['Technical', 'Cultural', 'Sports', 'Managerial'],
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;