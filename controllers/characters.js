const Character = require("../models/character");
const Project = require("../models/project");

// TODO: add show all characters function
// function index(req, res) {
//     res.render("characters/index", {
//         title: "All characters here",
//     });
// }

async function show(req, res) {
    // const character = await Character.findById(req.params.id); //.populate('project / user / etc');
    res.render("characters/show", {
        title: "Some Character",
        // TODO: pass character
        // character, 
    })
}

function newCharacter(req, res) {
    const projectId = req.session.projectId;
    // req.body.project = req.session.projectId;
    res.render('characters/new', {
        title: "New Character",
        projectId,
    })
}

async function create(req, res) {
    const projectId = req.session.projectId;
    req.body.project = projectId;
    // const project = await Project.findById(projectId);
    req.body.user = req.user._id;
    try {
        await Character.create(req.body);
        res.redirect(`/projects/${projectId}`);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    // index,
    show,
    new: newCharacter,
    create,
};
