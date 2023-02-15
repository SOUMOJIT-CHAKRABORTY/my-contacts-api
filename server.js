const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();

connectDb();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
