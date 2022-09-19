const { Schema, model } = require('mongoose')

const MessageShema = new Schema(
    {
        name:{
            type: String,
            require: true
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        from: {
            type: Schema.Types.ObjectId,
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

module.exports = {
    MessageModel
};
