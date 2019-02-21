

let centerCoordinates = [39.00, -98.00];

let map = L.map('bridges-map').setView(centerCoordinates, 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoibm9pcm9yaW9uIiwiYSI6ImNqczVhc3U0NzBkdGEzeXBicHlkZ24zNnEifQ.HvhsssPH_dHgAciNbU40tA'
}).addTo(map);

let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',

    iconSize:     [35, 30],
    iconAnchor:   [10, 10],
    popupAnchor:  [0, -7]
});

let verrazanoCoordinates = [40.6066, -74.0447];
let verrazanoMarker = L.marker(verrazanoCoordinates, {icon: bridgeIcon})
    .bindPopup("Verrazano-Narrows Bridge<br>New York, NY<br>1298.4 meters long")
    .addTo(map);

let goldenGateCoordinates = [37.8199, -122.4783];
let goldenGateMarker = L.marker(goldenGateCoordinates, {icon: bridgeIcon})
    .bindPopup("Golden Gate Bridge<br>San Francisco and Marin, CA<br>1280.2 meters long")
    .addTo(map);

let mackinacCoordinates = [45.8174, -84.7278];
let mackinacMarker = L.marker(mackinacCoordinates, {icon: bridgeIcon})
    .bindPopup("Mackinac Bridge<br>Mackinaw and St. Ignace, MI<br>1158 meters long")
    .addTo(map);

let washingtonCoordinates = [40.8517, -73.9527];
let washingtonMarker = L.marker(washingtonCoordinates, {icon: bridgeIcon})
    .bindPopup("George Washington Bridge<br>New York and New Jersey, NY<br>1067 meters long")
    .addTo(map);

let tacomaCoordinates = [47.2690, -122.5517];
let tacomaMarker = L.marker(tacomaCoordinates, {icon: bridgeIcon})
    .bindPopup("Tacoma Narrows Bridge<br>Tacoma and Kitsap, WA<br>853.44 meters long")
    .addTo(map);

