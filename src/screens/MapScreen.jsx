import { useState } from "react";
import { MAP_LOCATIONS } from "../data/mapData";
import { MISSIONS } from "../data/missions";
import "../styles/Map.css";

export default function MapScreen() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const missionsAtLocation = selectedLocation
  ? MISSIONS.filter(
      (mission) => mission.locationId === selectedLocation.id
    )
  : [];


  return (
    <div className="map-screen">
      <h1 className="screen-title">World Map</h1>

      <div className="map-layout">
        <div className="map-visual">
          {/* Map image will go here later */}
          <div className="map-placeholder">[ MAP IMAGE ]</div>
        </div>

        <div className="map-locations">
          {MAP_LOCATIONS.map((location) => (
            <button
              key={location.id}
              className={`location-btn ${location.status}`}
              disabled={location.status === "locked"}
              onClick={() => setSelectedLocation(location)}
            >
              {location.name}
            </button>
          ))}
        </div>

        {selectedLocation && (
          <div className="location-info">
            <h2>{selectedLocation.name}</h2>
            <p>{selectedLocation.description}</p>
            <h3>Missions Available:</h3>
            <ul>
              {missionsAtLocation.length > 0 ? (
                missionsAtLocation.map((mission) => (
                  <li key={mission.id}>{mission.title}</li>
                ))
              ) : (
                <li>No missions available here.</li>
              )}
            </ul>

            {selectedLocation.fastTravel && (
              <button className="travel-btn">Fast Travel</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

