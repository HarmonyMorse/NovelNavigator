const express = require("express");
const router = express.Router();
const projectsCtrl = require("../controllers/projects");
// const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get("/", projectsCtrl.index);

module.exports = router;
