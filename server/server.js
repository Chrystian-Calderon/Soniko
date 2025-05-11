import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send("server soniko"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log("puerto: " + port)
});