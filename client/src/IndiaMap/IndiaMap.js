import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const IndiaMap = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

  useEffect(() => {
    if (!mapContainer.current) return; 
    if (mapInstance.current) return;  

    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [79.2088, 17.1232], 
      zoom: 6,                     
    });

    mapInstance.current.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [API_KEY]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default IndiaMap;
