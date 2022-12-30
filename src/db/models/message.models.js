const { Schema, model } = require('mongoose')

const MessageShema = new Schema(
    {
        message:{
            type: String,
            require: true
        },
        to: {
            type: String,
            ref: "User",
            require: true
        },
        from: {
            type: String,
            ref: "User",
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const MessageModel = model("Message", MessageShema)

module.exports = MessageModel;

