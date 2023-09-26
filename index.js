const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const router = require("./routes/main.route");

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Application is connected");
})

app.use("/tasks",router);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
});

app.listen(port, () => {
    console.log("App is listening");
})