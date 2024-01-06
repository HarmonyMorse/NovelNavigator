const Character = require("../models/character");
// const Project = require("../models/project");

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
    res.render('characters/new', {
        title: "New Character",
    })
}

module.exports = {
    // index,
    new: newCharacter,
    show,
};
