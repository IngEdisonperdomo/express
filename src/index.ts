import express from "express";
import diariesRouter from "./routes/diaries";

const app = express();
app.use(express.json()); // for parsing application/json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("ping");
  res.send("pong");
});

app.use("/api/diaries", diariesRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
