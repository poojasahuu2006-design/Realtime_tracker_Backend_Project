# Real-Time Device Tracker 🌍

A full-stack tracking application capable of receiving, processing, and broadcasting live geolocation data to multiple connected clients simultaneously using WebSockets.

## 🌟 Key Features
- **Live Location Sync:** Uses the browser's Geolocation API to track movement in real-time.
- **WebSocket Integration:** Instant, bi-directional communication between the server and all connected clients.
- **Interactive Mapping:** Integration with Leaflet.js to plot users dynamically on a real map.
- **Multi-user Support:** Assigns unique socket IDs so multiple devices can be tracked on the same map independently.
- **Disconnect Handling:** Automatically removes a user's marker from the map when they disconnect.

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js
- **WebSockets:** Socket.io
- **Frontend / Maps:** HTML, CSS, JavaScript, Leaflet.js
- **Templating:** EJS (Embedded JavaScript)

## 📖 API Documentation & Swagger UI
The application includes interactive OpenAPI 3.0 documentation:
- **Interactive Swagger UI:** Visit `/api-docs` (e.g., `https://<your-render-url>/api-docs` or `http://localhost:3000/api-docs`)
- **Raw OpenAPI Spec:** Available at `/swagger.json`
- **Health Check:** `GET /api/health`
- **Active Tracker Sessions:** `GET /api/active-users`

## 🚀 Setup & Installation
1. Clone the repository: `git clone https://github.com/poojasahuu2006-design/Realtime_tracker_Backend_Project.git`
2. Run `npm install` to install dependencies.
3. Start the server: `npm start`
4. Open `http://localhost:3000` to view the live tracking map, or `http://localhost:3000/api-docs` to test APIs in Swagger.

## 🧠 What I Learned
This project was an incredible introduction to real-time communication protocols. I learned how WebSockets differ from standard HTTP requests and how to manage real-time state across multiple connected clients.

---
**Author:** Pooja Sahu
