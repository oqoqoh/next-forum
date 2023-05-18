import { MongoClient } from "mongodb";
import { dbInfo } from "./config";

const url = `mongodb+srv://${dbInfo.username}:${dbInfo.password}@cluster0.vy5lpxi.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
