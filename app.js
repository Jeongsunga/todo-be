const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require('cors');
require('dotenv').config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

const app = express();
// ✅ CORS 미들웨어를 제일 위에
app.use(cors());

// JSON 파싱
app.use(bodyParser.json());

// 라우터
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});