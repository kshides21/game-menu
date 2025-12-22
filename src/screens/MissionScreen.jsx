import { useState } from "react";
import { MISSIONS } from "../data/missions";
import { LOCATIONS } from "../data/locations";
import "../styles/MissionLog.css";

function MissionList({ title, missions, onSelect, disabled }) {
  return (
    <section className="mission-list">
      <h2>{title}</h2>

      {missions.map((mission) => (
        <button
          key={mission.id}
          className="mission-item"
          disabled={disabled}
          onClick={() => !disabled && onSelect(mission)}
        >
          {mission.title}
        </button>
      ))}

      {missions.length === 0 && <p className="empty-text">None</p>}
    </section>
  );
}

function MissionDetails({ mission }) {

  if (!mission) {
    return (
      <div className="mission-details">
        <p>Select a mission to view details</p>
      </div>
    );
  }

  const location = LOCATIONS[mission.locationId];

  if (mission.status === "locked") {
    return (
      <div className="mission-details">
        <p>This mission is currently locked.</p>
      </div>
    );
  }

  return (
    <div className="mission-details">
      <h2>{mission.title}</h2>
      <p><strong>Location:</strong> {location?.name ?? "Unknown"}</p>
      <p>{mission.description}</p>

      <h3>Objectives</h3>
      <ul>
        {mission.objectives.map((obj, i) => (
          <li key={i}>{obj}</li>
        ))}
      </ul>

      <h3>Rewards</h3>
      <p>XP: {mission.rewards.xp}</p>
      <p>Credits: {mission.rewards.credits}</p>
      {mission.rewards.items && (
        <p>Items: {mission.rewards.items.join(", ")}</p>
      )}
    </div>
  );
}

export default function MissionScreen() {
  const [selectedMission, setSelectedMission] = useState(null);

  const active = MISSIONS.filter(q => q.status === "active");
  const completed = MISSIONS.filter(q => q.status === "completed");
  const locked = MISSIONS.filter(q => q.status === "locked");

  return (
    <div className="mission-log">
      <h1 className="screen-title">Mission Log</h1>

      <div className="mission-layout">
        <MissionList
          title="Active Missions"
          missions={active}
          onSelect={setSelectedMission}
        />
        <MissionList
          title="Completed"
          missions={completed}
          onSelect={setSelectedMission}
        />
        <MissionList
          title="Locked"
          missions={locked}
          onSelect={setSelectedMission}
          disabled
        />

        <MissionDetails mission={selectedMission} />
      </div>
    </div>
  );
}

