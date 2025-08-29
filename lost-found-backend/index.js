require("dotenv").config();
const express = require("express");

const app = express();

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const connectDB = require("./config/db");




//use middleware
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
