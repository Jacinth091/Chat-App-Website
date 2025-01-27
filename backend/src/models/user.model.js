import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,

    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    middleName: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    password: {
      type:String,
      required: true,
      minLength: 6

    },


  },
  {timestamps: true}




);
const User = mongoose.model("User", userSchema);

export default User;