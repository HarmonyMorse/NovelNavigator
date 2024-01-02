const Project = require("../models/project");

function index(req, res) {
    res.render("projects/index", {
        title: "Projects here",
    });
}

function newProject(req, res) {
    res.render("projects/new", {
        title: "New Project"
    })
}

module.exports = {
    index,
    new: newProject,
};
