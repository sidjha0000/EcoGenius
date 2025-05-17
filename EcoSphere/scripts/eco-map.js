document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Category-wise data with corresponding icons
    const ecoData = [
        { category: "Recycling Center ♻️", icon: "recycling.png", locations: [
            { name: "Green Recycle Center - Delhi", lat: 28.6139, lng: 77.2090 },
            { name: "Eco Recycling Hub - Bangalore", lat: 12.9716, lng: 77.5946 }
        ]},
        { category: "Eco-Friendly Store 🛒", icon: "eco-store.png", locations: [
            { name: "Nature's Basket - Mumbai", lat: 19.0760, lng: 72.8777 },
            { name: "Green Mart - Chennai", lat: 13.0827, lng: 80.2707 }
        ]},
        { category: "Green Zone 🌳", icon: "green-zone.png", locations: [
            { name: "Cubbon Park - Bangalore", lat: 12.9764, lng: 77.5920 },
            { name: "Lodhi Garden - Delhi", lat: 28.5931, lng: 77.2197 }
        ]},
        { category: "Air Quality Index 📊", icon: "aqi.png", locations: [
            { name: "Delhi AQI: 180 (Moderate)", lat: 28.7041, lng: 77.1025 },
            { name: "Mumbai AQI: 90 (Good)", lat: 19.0760, lng: 72.8777 }
        ]},
        { category: "Sustainable Transport 🚲", icon: "ev-charging.png", locations: [
            { name: "EV Charging - Pune", lat: 18.5204, lng: 73.8567 },
            { name: "EV Charging - Hyderabad", lat: 17.3850, lng: 78.4867 }
        ]}
    ];

    // Function to add markers dynamically
    function addMarkers(data) {
        data.forEach(category => {
            category.locations.forEach(location => {
                let customIcon = L.icon({
                    iconUrl: category.icon,
                    iconSize: [30, 30]
                });

                L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map)
                    .bindPopup(`<b>${category.category}</b><br>${location.name}`);
            });
        });
    }

    addMarkers(ecoData);
});
