const express = require("express");
const db = require("./routes/config_db.js");
const app = express();
const cookie = require("cookie-parser");

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

console.log(stripePublicKey, stripeSecretKey)
const PORT = process.env.PORT || 4000;
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