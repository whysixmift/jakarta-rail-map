# Jakarta Rail Map

Interactive static railway map of Jakarta built with Leaflet and OpenStreetMap tiles.

## Features

- Full-screen interactive map
- Centered on Jakarta (`-6.2088, 106.8456`) at zoom `11`
- Colored railway polylines per route
- Circle station markers with popups
- Route and station data loaded from `routes.js`
- No frameworks and no build tools

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/) tiles

## Project Structure

```text
jakarta-rail-map/
  index.html
  style.css
  map.js
  routes.js
  README.md
```

## Run Locally

Option 1: Open directly

- Open `index.html` in your browser.

Option 2: Serve with a local HTTP server (recommended)

```bash
cd jakarta-rail-map
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

## Data Model (`routes.js`)

Each route uses this schema:

```js
{
  name: "Route Name",
  color: "#RRGGBB",
  stations: ["Station A", "Station B"],
  coordinates: [
    [latA, lngA],
    [latB, lngB]
  ]
}
```

## Included Routes

- KRL Bogor Line (+ Nambo branch)
- KRL Cikarang Line
- KRL Rangkasbitung Line
- KRL Tangerang Line
- KRL Tanjung Priok Line
- MRT Jakarta Line
- LRT Jabodebek

## Notes

- Coordinates are realistic approximate station positions for map visualization.
- Base map attribution is included in-app per OSM and Leaflet usage requirements.
