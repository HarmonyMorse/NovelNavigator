const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
    {
        // someAttribute: {
        //     type: someDataType,
        //     required: someBoolean,
        // },
        // anotherAttribute: {
        //     type: Number,
        //     min: someMinNumber,
        //     max: someMaxNumber,
        //     default: someDefaultValue,
        // },
        // someSimpleAttribute: [someDataType],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Character", characterSchema);
