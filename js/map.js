// Coördinaten van het centrum van Antwerpen (ongeveer)
let antwerpCenter = [51.21989, 4.40346];


let map = L.map('Map', {
maxZoom: 19
}).setView(antwerpCenter, 10); // zoomniveau aangepast om de agglomeratie te tonen


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// radius van de cirkel
let circleRadius = 10000;  // 10 km radius


// rode cirkel om de agglomeratie aan te duiden
let antwerpCircle = L.circle(antwerpCenter, {
color: '#e60005',
fillColor: '#e60005',
fillOpacity: 0.2,
radius: circleRadius
}).addTo(map);

// plaats icon.png als marker op de map
let markerIcon = L.icon({
  iconUrl: './assets/leaflet/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});


// marker in het centrum
let antwerpMarker = L.marker(antwerpCenter, { icon: markerIcon }).addTo(map)
.bindPopup('regio Antwerpen')
.openPopup();