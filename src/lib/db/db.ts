import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const connection: { isConnected?: number } = {};

console.log(uri);

const connectDb = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(uri!);

  connection.isConnected = db.connections[0].readyState;
};

export default connectDb;
