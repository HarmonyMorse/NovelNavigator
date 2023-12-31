const Character = require("../models/character");
const Project = require("../models/project");

// TODO: add show all characters function
// function index(req, res) {
//     res.render("characters/index", {
//         title: "All characters here",
//     });
// }

async function show(req, res) {
    const character = await Character.findById(req.params.id).populate('project');
    res.render("characters/show", {
        title: `${character.name} -- ${character.project.title}`,
        // TODO: pass character
        character,
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
    const project = await Project.findById(projectId);
    req.body.project = projectId;
    req.body.user = req.user._id;
    try {
        const character = await Character.create(req.body);
        project.characters.push(character);
        await project.save();
        res.redirect(`/projects/${projectId}`);
    } catch(err) {
        console.log(err);
    }
}

async function deleteCharacter(req, res) {
    const projectId = req.session.projectId;
    const project = await Project.findById(projectId);
    const character = await Character.findById(req.params.id);
    project.characters.remove(character);
    await project.save();
    await Character.findByIdAndDelete(req.params.id);
    res.redirect(`/projects/${projectId}`);
}

module.exports = {
    // index,
    show,
    new: newCharacter,
    create,
    delete: deleteCharacter,
};
