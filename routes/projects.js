const express = require("express");
const router = express.Router();
const projectsCtrl = require("../controllers/projects");
// const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get("/", projectsCtrl.index);

// GET /projects/new (new functionality)
router.get('/new', projectsCtrl.new);

// GET /projects/show/:id (show specific project fuctionality)
router.get('/show/:id', projectsCtrl.show);

module.exports = router;
