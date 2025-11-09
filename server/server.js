// import express from "express";
// import cors from "cors";
// import records from "./routes/record.js";
// import dotenv from "dotenv";

// dotenv.config();
// const PORT = process.env.PORT || 5050;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/record", records);

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recordsRouter from "./routes/record.js";
import connectDB from "./db/connection.js"; // <-- import connection

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully.");

    // Routes
    app.use("/record", recordsRouter);

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });
