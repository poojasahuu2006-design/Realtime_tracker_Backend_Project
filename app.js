const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Track active socket connections
const activeSockets = new Set();

io.on("connection", function (socket) {
    activeSockets.add(socket.id);

    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        activeSockets.delete(socket.id);
        io.emit("user-disconnected", socket.id);
    });

    socket.on("stop-tracking", function () {
        io.emit("user-disconnected", socket.id);
    });
});

// Swagger API Documentation UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check endpoint (for Render / uptime monitors)
app.get("/api/health", function (req, res) {
    res.json({
        status: "healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        activeConnections: activeSockets.size
    });
});

// Active connected users summary
app.get("/api/active-users", function (req, res) {
    res.json({
        activeCount: activeSockets.size,
        socketIds: Array.from(activeSockets)
    });
});

// Raw Swagger JSON endpoint
app.get("/swagger.json", function (req, res) {
    res.json(swaggerDocument);
});

// Map View
app.get("/", function (req, res) {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});