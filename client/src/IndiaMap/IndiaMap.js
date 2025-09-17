import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import config from "../config"

const API_URL =config.API_URL ;

const IndiaMap = () => {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/mandals_all`)
      .then((res) => res.json())
      .then((data) => {
        setGeojson(data); // 👈 use directly
      })
      .catch((err) => console.error("Error fetching mandals:", err));
  }, []);

  const styleFeature = (feature) => ({
    color: feature.properties.type === "mandal" ? "red" : "blue",
    weight: 2,
    fillOpacity: 0.2,
  });

  const onEachFeature = (feature, layer) => {
    const { name, type } = feature.properties;
    layer.bindPopup(`<b>${name}</b><br/>Type: ${type}`);
  };

  return (
    <MapContainer
      center={[19.2, 79.2]}
      zoom={7}
      style={{ width: "100%", height: "100vh" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      {geojson && (
        <GeoJSON data={geojson} style={styleFeature} onEachFeature={onEachFeature} />
      )}
    </MapContainer>
  );
};

export default IndiaMap;
