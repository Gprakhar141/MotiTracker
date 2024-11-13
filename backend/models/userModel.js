import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    cpi: {
      type: double,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    subjects: [{ 
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }],
    committees: [{
        type: Schema.Types.ObjectId,
        ref: "Committee"
    }],
    time_table_id: { 
        type: Schema.Types.ObjectId,
        ref: "TimeTable" 
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
