const express = require("express");
const { getcontact,getacontact,updatecontact,createcontact,deletecontact } = require("../controllers/contactController");
const router = express.Router();
// const users = [
//     { name: 'Raashish' },
//     { emailid: 'Gautam@gmail.com' },
//     { phone: '1234567890' }
// ];

router.route("/").get(getcontact);

router.route("/").get(getacontact);

router.route("/").post(updatecontact);

router.route("/").put(createcontact);

router.route("/").delete(deletecontact);

module.exports = router;