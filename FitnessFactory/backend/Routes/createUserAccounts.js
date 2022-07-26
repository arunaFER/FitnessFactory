const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require("bcrypt");

router.route("/createUserAccount").post(async (req,res) => {

    const username = req.body.username;
    const plainPassword = req.body.password;
    const accType = req.body.accType;
    const accLevel = Number(req.body.accLevel);

    //hashing
    const saltRounds = 10;
    
    const password = await bcrypt.hashSync(plainPassword, saltRounds);

    const newUser = new User({
        username,
        password,
        accType,
        accLevel
    })

    newUser.save().then(() => {
    res.json("User account created")
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;

