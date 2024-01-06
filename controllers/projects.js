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

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const project = await Project.create(req.body);
        res.redirect(`/projects/${project._id}`);
    } catch(e3rr) {
        console.log(err);
    }
}

function show(req, res) {
    // const project = await Project.findById(req.params.id).populate('characters');
    const projectId = req.params.id;
    req.session.projectId = projectId;
    res.render("projects/show", {
        title: "Some Project",
        projectId,
        // TODO: add project
        // project, 
    })
}

module.exports = {
    index,
    new: newProject,
    create,
    show,
};
