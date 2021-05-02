const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT || 5000;

// app.use(express.static("../frontend/dist"));

// app.get("/", function(req, res) {
//   res.sendFile("index.html");
// });

io.on("connection", (socket) => {
  socket.on("SEND_MESSAGE", (data) => {
    io.emit("MESSAGE", data);
  });
});

http.listen(PORT, function() {
  console.log("server listening. Port:" + PORT);
});
