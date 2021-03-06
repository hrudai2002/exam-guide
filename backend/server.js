const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/resource-routes");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/", router);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => console.log(err));
