
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;

if (!uri) {
  throw new Error("Missing ATLAS_URI in .env file");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectDB = async () => {
  if (db) return db; // Reuse existing connection

  try {
    await client.connect();
    db = client.db("employees"); // Database name
    await db.command({ ping: 1 });
    console.log("Ping successful. Connected to MongoDB Atlas.");
    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

export default connectDB;

