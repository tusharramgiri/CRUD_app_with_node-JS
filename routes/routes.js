const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
    res.send("All Users");
});

router.get("/", (req, res) => {
    res.render("index", { title: "HOme PAge"})
});
router.get("/add", (req, res) => {
    res.render("add_users", { title: "Add Users"})
});

module.exports = router;
