const express = require("express");
const loggedin = require("../controllers/loggedin")
const router = express.Router();
const logout = require("../controllers/logout")
const viewall = require("../controllers/users")
const viewuser = require("../controllers/user")
const userz = require("../controllers/userz")

router.get("/", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/index", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/index", {status: "no", user:"nothing"});
    }
})

router.get("/register", (req, res) => {
    res.render("pages/register")
})

router.get("/login", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/login", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/login", {status: "no", user:"nothing"});
    }
})


router.get("/profile", loggedin, (req, res) => {
    if (req.user){
        res.render("pages/profile", {status: "loggedin", user:req.user}); 
    } else {
        res.render("pages/profile", {status: "no", user:"nothing"});
    }
})
router.get("/logout", logout)


router.get("/viewusers", viewall, (req, res) => {
    res.render("pages/viewusers", {result})
});

router.get("/viewuser/:id", viewuser, (req, res) =>{
  //  res.render("viewuser", {result: result[0]})
});


router.get("/dashboard", userz ,(req, res) => {
  
});


module.exports = router;