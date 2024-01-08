const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Showing all characters (.index)
// GET /
// router.get('/', charactersCtrl.index);

// GET /new (new functionality)
router.get('/new', ensureLoggedIn, charactersCtrl.new);

// POST / (create character)
router.post('/', ensureLoggedIn, charactersCtrl.create);

// Showing specific character (.show)
// GET /:id
router.get('/:id', ensureLoggedIn, charactersCtrl.show);

// Delete specific character
// DELETE /:id
router.delete('/:id', ensureLoggedIn, charactersCtrl.delete);

module.exports = router;