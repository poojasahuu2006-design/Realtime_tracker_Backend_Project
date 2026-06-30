const socket = io();

const username = prompt("Enter your name:") || "Anonymous";

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude, name: username });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const map = L.map("map").setView([0, 0], 20);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Google map Location Tracking ",
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
    const { id, latitude, longitude, name } = data;
    map.setView([latitude, longitude]);
    
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
        markers[id].setPopupContent(`<b>${name}</b>`);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map).bindPopup(`<b>${name}</b>`).openPopup();
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
