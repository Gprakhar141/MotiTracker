import mongoose from "mongoose";

const timetableSchema = mongoose.Schema(
  {
    
  },
  {
    timestamps: true,
  }
);

const TimeTable = mongoose.model("TimeTable", timetableSchema);

export default TimeTable;