const router = require("express").Router();
const {HomeController} = require("../controllers");
const homeController = require("../controllers/home.controller");

router.get("/", homeController.index);

module.exports = router;