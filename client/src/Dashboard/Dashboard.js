import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import MandalMap from "../IndiaMap/MandalMap";
import config from "../config";

const API_URL = config.API_URL ;

const Dashboard = () => {
  const [mandals, setMandals] = useState([]);
  const [selectedMandal, setSelectedMandal] = useState(null);
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/mandals`)
      .then(res => res.json())
      .then(data => setMandals(data.mandals))
      .catch(err => console.error(err));
  }, []);

  const loadMandal = (mandalName) => {
    fetch(`${API_URL}/mandals/${mandalName}`)
      .then(res => res.json())
      .then(data => {
        setSelectedMandal(mandalName);
        setGeojson(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="dashboardContainer">
      <div className="dashboardMainContainer">
        <h1>Dashboard</h1>

        <div className="dashboardData">
          <h2>Mandals</h2>

          {mandals.map((mandal) => (
            <div className="dashboardDataCard" key={mandal}>
              <h2>{mandal}</h2>
              <p>Villages included (click button to view on map)</p>
              <button onClick={() => loadMandal(mandal)}>Show on Map</button>
            </div>
          ))}
        </div>

        <div className="dashboardMap">
          <h2>Map</h2>
          <MandalMap geojson={geojson} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
