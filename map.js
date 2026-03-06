const JAKARTA_CENTER = [-6.2088, 106.8456];
const DEFAULT_ZOOM = 11;

const map = L.map("map", {
  zoomControl: true
}).setView(JAKARTA_CENTER, DEFAULT_ZOOM);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function isValidRoute(route) {
  return (
    route &&
    typeof route.name === "string" &&
    typeof route.color === "string" &&
    Array.isArray(route.stations) &&
    Array.isArray(route.coordinates) &&
    route.stations.length === route.coordinates.length &&
    route.stations.length > 0
  );
}

const stationRegistry = new Set();

(RAIL_ROUTES || []).forEach((route) => {
  if (!isValidRoute(route)) {
    console.warn("Invalid route skipped:", route);
    return;
  }

  L.polyline(route.coordinates, {
    color: route.color,
    weight: 5,
    opacity: 0.9,
    lineJoin: "round"
  })
    .addTo(map)
    .bindPopup(`<strong>${route.name}</strong>`);

  route.stations.forEach((stationName, index) => {
    const coord = route.coordinates[index];
    const dedupeKey = `${stationName}|${coord[0].toFixed(5)}|${coord[1].toFixed(5)}`;

    if (stationRegistry.has(dedupeKey)) {
      return;
    }

    stationRegistry.add(dedupeKey);

    L.circleMarker(coord, {
      radius: 5,
      color: "#1f2937",
      weight: 1,
      fillColor: route.color,
      fillOpacity: 0.95
    })
      .addTo(map)
      .bindPopup(`<strong>${stationName}</strong><br>${route.name}`);
  });
});
