import { useState } from "react";
import { MAP_LOCATIONS } from "../data/mapData";
import { MISSIONS } from "../data/missions";
import { useIsMobile } from "../components/isMobile";
import mapDesktop from "../assets/world-map-desktop.png";
import mapMobile from "../assets/world-map-phone.png";
import "../styles/Map.css";

export default function MapScreen() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const isMobile = useIsMobile(716);

  const missionsAtLocation = selectedLocation
    ? MISSIONS.filter((mission) => mission.locationId === selectedLocation.id)
    : [];

  return (
    <div className="map-screen">
      <h1 className="screen-title">World Map</h1>

      <div className="map-layout">
        <div className="map-visual">
          <img
            src={isMobile ? mapMobile : mapDesktop}
            alt="World Map"
            className="map-image"
          />

          {MAP_LOCATIONS.map((location) => {
            const coords = isMobile
              ? location.coords.mobile
              : location.coords.desktop;

            return (
              <button
                key={location.id}
                className={`map-marker ${location.status} ${selectedLocation && selectedLocation.id === location.id
                  ? "active"
                  : ""}`}
                style={{
                  top: coords.y,
                  left: coords.x,
                }}
                onClick={() => setSelectedLocation(location)}
              >
                {location.emoji}
              </button>
            );
          })}
        </div>

        <div className="map-locations">
          {MAP_LOCATIONS.map((location) => (
            <button
              key={location.id}
              className={`location-btn ${location.status} ${
                selectedLocation && selectedLocation.id === location.id
                  ? "active"
                  : ""
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              {location.name}
            </button>
          ))}
        </div>

        {selectedLocation && (
          <div className="location-info">
            <h2>
              {selectedLocation.name} {selectedLocation.emoji}
            </h2>
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
