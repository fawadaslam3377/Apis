"use strict";
const http = require("http");
const app = require("./app");
const port = process.env.port || 8080;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `Listening on http://localhost:${port}/`,
    process.env.NODE_ENV,
    app.get("host"),
    app.get("port")
  );
});
