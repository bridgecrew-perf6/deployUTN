const router = require("express").Router();
const { addOne, listAll } = require("./postsController");
const isAuth = require("../middlewares/isAuth");
const validatorCreatePost = require("../validators/posts");

router.get("/", listAll);
router.post("/", isAuth, validatorCreatePost, addOne);

module.exports = router;
