const router = require("express").Router();
const postsRoutes = require("./posts");
const profileRoutes = require("./profile");
const usersRoutes = require("./users");

// NYT routes
router.use("/posts", postsRoutes);

router.use("/profile", profileRoutes);

router.use("/users", usersRoutes);

module.exports = router;
