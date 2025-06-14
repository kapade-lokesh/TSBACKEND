import { Schema, model } from "mongoose";
import IUser from "../types/user.types";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
