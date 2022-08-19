const express = require("express");
const db = require("./routes/config_db.js");
const app = express();
const cookie = require("cookie-parser");

const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 5000;
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/img", express.static(__dirname + "/public/imgs"))
app.set("view engine", "ejs");
app.set("views", "./view");
app.use(cookie());
app.use(express.json());
db.connect((err) => {
 if (err) throw err;
 console.log("database conectada");
})

app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

app.listen(PORT);