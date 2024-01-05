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

function show(req, res) {
    // const project = await Project.findById(req.params.id).populate('characters');
    res.render("projects/show", {
        title: "Some Project",
        // TODO: add project
        // project, 
    })
}

module.exports = {
    index,
    new: newProject,
    show,
};
