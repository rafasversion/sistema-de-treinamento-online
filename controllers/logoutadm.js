const logoutadm = (req, res) => {
    res.clearCookie("admRegistered");
    res.redirect("/");
}

module.exports = logoutadm;