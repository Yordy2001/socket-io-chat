const { Socket } = require("socket.io");

module.exports = (io, Socket) => {
    const register = (payload) => {
        console.log(payload)
    }

    const login = (orderId, callback) => {
        // ...
    }

}