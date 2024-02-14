//imports
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("connected to the database!"));

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
        secret: 'my secret key',
        saveUninitialised: true,
        resave: false,
    })
);


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`server is started at http://localhost:${PORT}`);
});
