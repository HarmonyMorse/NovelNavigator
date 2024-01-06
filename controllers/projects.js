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

async function show(req, res) {
    const projectId = req.params.id;
    const project = await Project.findById(projectId).populate('characters');
    req.session.projectId = projectId;
    res.render("projects/show", {
        title: project.title,
        projectId,
        project, 
    })
}

module.exports = {
    index,
    new: newProject,
    create,
    show,
};
