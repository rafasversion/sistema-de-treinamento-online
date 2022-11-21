const db = require("../routes/config_db");
const jwt = require("jsonwebtoken");

const loggedinadm = (req, res, next) => {
    if(!req.cookies.admRegistered) return next();
    try {
        const decoded = jwt.verify(req.cookies.admRegistered, process.env.JWT_SECRET_ADM);
        db.query("SELECT * FROM personal_trainer WHERE id_personal = ?", [decoded.id_personal], (err, result) => {
            
            

            if(err) return next();
            req.adm = result[0];
           
            return next();
           
        })
       
    } catch (err) {
        if(err) return next()
    }

}

module.exports = loggedinadm;