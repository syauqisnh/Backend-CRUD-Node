const router = require("express").Router();
const r_crud = require("./r_crud.js");

router.use(r_crud);
module.exports = router;