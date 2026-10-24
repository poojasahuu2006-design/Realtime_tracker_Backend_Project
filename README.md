# Real-Time Device Tracker 🌍

[![Live Demo](https://img.shields.io/badge/Live_Demo-Render_Cloud-brightgreen?style=for-the-badge&logo=render)](https://realtime-tracker-mnfs.onrender.com/)
[![Swagger Docs](https://img.shields.io/badge/Swagger_UI-API_Docs-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://realtime-tracker-mnfs.onrender.com/api-docs)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io)
[![Leaflet](https://img.shields.io/badge/Leaflet.js-Interactive_Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com)

> 🚀 **Live Application:** [realtime-tracker-mnfs.onrender.com](https://realtime-tracker-mnfs.onrender.com/)  
> 📖 **Interactive Swagger UI:** [realtime-tracker-mnfs.onrender.com/api-docs](https://realtime-tracker-mnfs.onrender.com/api-docs)

A high-performance real-time tracking application capable of receiving, processing, and broadcasting live geolocation telemetry to multiple connected clients simultaneously using WebSockets and Leaflet.js.

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
- **Interactive Swagger UI:** [realtime-tracker-mnfs.onrender.com/api-docs](https://realtime-tracker-mnfs.onrender.com/api-docs)
- **Raw OpenAPI Spec:** [realtime-tracker-mnfs.onrender.com/swagger.json](https://realtime-tracker-mnfs.onrender.com/swagger.json)
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
