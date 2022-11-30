const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
    username:{
        type: String,
        required: 'Username cannot be empty.',
        unique: 'Username needs to be unique.',
        trim: true
    },
    email: {
        type: String,
        required: 'Email cannot be empty.',
        unique: 'Email needs to be unique.',
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
});

module.export = UserSchema;