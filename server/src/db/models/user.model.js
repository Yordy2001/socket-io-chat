const { Schema, model } = require('mongoose')

const UserShema = new Schema(
    {
        name:{
            type: String,
            require: true
        },
        tel: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        portada:{
            type: String,
        },
        info: {
            type: String
        },
        friends: {
            type: Array
        },
        online: {
            type: Boolean
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = model("User", UserShema)

module.exports =  UserModel ;
