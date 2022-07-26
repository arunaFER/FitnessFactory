const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;
//app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
}).on("error", (err) => {
    console.log(err);
});

//routes
const userRouter = require("./routes/createUserAccounts");

app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log('Server up and running on port: ' + PORT)
})