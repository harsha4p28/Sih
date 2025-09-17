import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

const GeoJsonLayer = ({ geojson }) => {
  const map = useMap();

  useEffect(() => {
    if (!geojson) return;

    const layer = L.geoJSON(geojson, {
      style: (feature) => ({
        color: feature.properties.type === "mandal" ? "red" : "blue",
        weight: 2,
      }),
      onEachFeature: (feature, layer) => {
        // Add popup with details
        const { name, type } = feature.properties;
        layer.bindPopup(`<b>${name}</b><br/>Type: ${type}`);
      },
    }).addTo(map);

    map.fitBounds(layer.getBounds());

    return () => {
      map.removeLayer(layer); // cleanup when geojson changes
    };
  }, [geojson, map]);

  return null;
};

const MandalMap = ({ geojson }) => (
  <MapContainer
    center={[19.2, 79.2]}
    zoom={7}
    style={{ height: "500px", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    <GeoJsonLayer geojson={geojson} />
  </MapContainer>
);

export default MandalMap;
