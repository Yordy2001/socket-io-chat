const UserModel = require("../db/models/user.model");
const MessageModel = require("../db/models/message.models");

module.exports = (io, socket) => {
  let numero;

  // Create User Room
  const handleConnect = async (num) => {
    socket.join(num);
    numero = num;
    let user = await UserModel.findOne({ tel: num });
    user.isActive = true;
    await user.save();
    return;
  };

  const handleDiconnect = async () => {
    let user = await UserModel.findOne({ tel: numero });
    user.isActive = false;
    await user.save();
    return;
  };

  // Get and post message
  const handleMessage = async (payload) => {
    const { to, from } = payload;
    try {
      let messages = await MessageModel.find({
        $or: [{ to: to, from }, { to: from, from: to }, { to: from }],
      }).sort({ createdAt: "asc" });
      io.to(to).to(numero).emit("server-db-messages", { data: messages });
    } catch (error) {
      console.log(error);
    }
  };

  const setMessage = async (payload) => {
    const { from, message, to } = payload;
    try {
      await MessageModel.create({
        message,
        to,
        from,
      });
    } catch (error) {
      console.log(error);
    }
  };

  socket.on("connection", handleConnect);

  socket.on("logout", handleDiconnect);
  socket.on("client:message", setMessage);

  socket.on("client-get-db-messages", handleMessage);
};
