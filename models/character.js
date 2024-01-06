const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
    {
        // Assignments
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
        },

        // Details
        role: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        birthdate: {
            type: Date,
        },
        // Appearance
        gender: {
            type: String,
        },
        hair: {
            type: String,
        },
        eyes: {
            type: String,
        },
        height: {
            type: String,
        },

        // Personality
        neurotype: {
            type: String,
            enum: ['neurotypical', 'neurodivergent'],
        },
        mbti: {
            type: String,
            enum: ['INTJ', 'INTP', 'INFJ', 'INFP', 'ISTJ', 'ISFJ', 'ISTP', 'ISFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP'],
        },
        showZodiac: {
            type: Boolean,
            default: false,
        },
        zodiac: {
            type: String,
            enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
        },
        enneagram: {
            type: String,
            // for example 9w8, or 3wb (wings balanced) created in view
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Character", characterSchema);
