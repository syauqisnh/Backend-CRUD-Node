const router = require('express').Router();

const {
  post_crud,
  put_crud,
  delete_crud,
  get_all_crud,
  get_detail_crud,
} = require("../controllers/c_crud.js");

router.post("/crud", post_crud);
router.patch("/crud/:id", put_crud);
router.delete("/crud/:id", delete_crud);
router.get("/crud/get_all", get_all_crud);
router.get("/crud/:id", get_detail_crud);

module.exports = router;