import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async (): Promise<void> => {
  try {
    mongoose.connection.on("connected", () => {
      console.log(mongoose.connection.host);
    });

    mongoose.connection.on("error", (err) => {
      console.log("error in connection", err);
    });
    await mongoose.connect(config.mongo_url as string);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
