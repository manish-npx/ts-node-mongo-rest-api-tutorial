import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URL = 'mongodb://userAdmin:password@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&authSource=admin&appName=mongosh+1.10.1'; // DB URI

const connectDB = async () => {
  try {
    await mongoose.connect(
      MONGO_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Database is connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;