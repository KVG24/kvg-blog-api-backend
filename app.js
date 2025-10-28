const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
require("dotenv").config;

// Initiate main express app
const app = express();

// CORS config
const allowedOrigins = [process.env.CLIENT_ORIGIN, process.env.ADMIN_ORIGIN];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

// Parsing json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/", router);

// Live app in localhost
app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("app listening on port 3000!");
    console.log("___________________________");
});
