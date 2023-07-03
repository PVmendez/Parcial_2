import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"
import Routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

Routes(app)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
