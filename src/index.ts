import express from "express";
import bodyParser from "body-parser";
import Db from "./config/dataBase";
import router from "./routes/routes";

const app = express();

app.use(bodyParser.json());

app.use("/movie", router);

Db.on("open", () => {
  app.listen(2306, () => {
    console.log("server is runnings");
  });
});

Db.on("error", (err) => {
  console.log("server not running", err);
});
