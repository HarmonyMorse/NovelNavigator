const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        // Assignments
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        // Character Details
        characterCount: {
            type: Number,
            min: 0,
            default: 0,
        },
        characters: [{
            type: Schema.Types.ObjectId,
            ref: 'Character',
        }],

        // Project Details
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "No description provided.",
        },
        mediaType: {
            type: String,
            default: "Unspecified",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Project", projectSchema);
