const express = require("express");
const connectDB = require("./config/db.config");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api",require("./routes/product-routes"));

app.listen(5000,()=>{
    console.log("App is running on port 5000")
})
