import express from "express";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";
import path from "path";
dotenv.config();

const __dirname = path.resolve();

const app = express();

// For deploying on render
// app.use(express.static(path.join(__dirname, "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/data", blogRoute);
const port = 3000;
connectDb().then(() => [
  app.listen(port, () => {
    console.log("App is listening on port 3000");
  }),
]);

app.use(errorMiddleware);
