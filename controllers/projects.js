const Project = require("../models/project");

function index(req, res) {
    res.render("projects/index", {
        title: "Projects here",
    });
}

module.exports = {
    index,
};
