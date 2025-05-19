// Coördinaten van het centrum van Antwerpen (ongeveer)
  let antwerpCenter = [51.21989, 4.40346];
 

  let map = L.map('apMap', {
  maxZoom: 19
  }).setView(antwerpCenter, 11); // zoomniveau aangepast om de agglomeratie te tonen
 

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
 

  // marker in het centrum
  let antwerpMarker = L.marker(antwerpCenter).addTo(map)
  .bindPopup('Antwerpen en agglomeratie')
  .openPopup();