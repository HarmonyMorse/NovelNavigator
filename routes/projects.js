const express = require("express");
const router = express.Router();
const projectsCtrl = require("../controllers/projects");
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get("/", ensureLoggedIn, projectsCtrl.index);

// GET /projects/new (new functionality)
router.get('/new', ensureLoggedIn, projectsCtrl.new);

//  POST /projects (create functionality)
router.post('/', ensureLoggedIn, projectsCtrl.create);

// GET /projects/show/:id (show specific project fuctionality)
router.get('/show/:id', ensureLoggedIn, projectsCtrl.show);

module.exports = router;
