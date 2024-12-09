import mongoose, { Document, Schema } from "mongoose";
const bcrypt = require("bcrypt");

export interface IUser extends Document {
  name: string;
  email: string;
  is_admin: boolean;
  avatar: string;
  password: string;
  roles: string;
}

const userSchema: Schema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      default: "annonymus",
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email missing"],
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "password missing"],
    },
    roles: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
  canditatePassword: string
) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
