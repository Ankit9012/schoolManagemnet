const http = require("http");
const app = require("./app/app");

const PORT = process.env.PORT || 2020;

// // middleware

// app.use(morgan("dev"));

// Server start
const server=http.createServer(app);
server.listen(PORT, console.log(`Server is running ${PORT}`));
