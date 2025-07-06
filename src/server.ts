import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.port, () => {
  console.log(` server is running on port ${config.port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "library-management-api server is Running",
  });
});

async function server() {
  try {
    await mongoose.connect(config.database_env!);
    console.log(`✅ mongoDB Connected`);
  } catch (error: any) {
    console.log(`server error: ${error.message}`);
  }
}
server();
