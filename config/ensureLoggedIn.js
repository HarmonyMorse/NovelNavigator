// Middleware for routes that require a logged in user
module.exports = (req, res, next) => {
    // Pass the req/res to the next middleware/route handler
    if (req.isAuthenticated()) return next();
    // Redirect to login if the user is not already logged in
    res.redirect("/auth/google");
};
/*
To use:
const ensureLoggedIn = require('../config/ensureLoggedIn');
router.get('/<path>', ensureLoggedIn, <function>);
*/