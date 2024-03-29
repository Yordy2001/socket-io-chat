require("dotenv/config");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const { dbConnect } = require("./src/db/config/mongo");
const cookieParse = require("cookie-parser");
const cookieSession = require("./src/utils/cookie.config");
const router = require("./src/routers/user.routes");
const chatController = require("./src/controllers/socket.controller");

//Server config
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    withCredentials: true,
    origin: "http://localhost:3000",
  },
});

app.set("trust proxy", 1); //cookie config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/static", express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(cookieParse());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieSession);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(router);

dbConnect()
  .then(() => {
    console.log("se connecto a mongo");
  })
  .catch(() => {
    (err) => console.log(err);
  });

io.on("connection", async (socket) => {
  // message, chat controller
  chatController(io, socket);
});

server.listen(PORT, () => {
  console.log(`app is listen on port ${PORT}`);
});
