const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require('cors');

const app = express();
// ✅ CORS 미들웨어를 제일 위에
app.use(cors());

// JSON 파싱
app.use(bodyParser.json());

// 라우터
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(4000, () => {
  console.log("server on 4000");
});
