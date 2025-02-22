
// This file is used to connect API with DB
import mongoose from "mongoose";

const CONNECTION_URI = process.env.CONNECTION_URI;

export const connectTOMongoDb = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI);
    if (connect) {
      console.log("Database connected at " + CONNECTION_URI);
    }
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};
