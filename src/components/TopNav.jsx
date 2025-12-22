const tabs = [
  { id: "map", label: "Map" },
  { id: "character", label: "Character" },
  { id: "quests", label: "Quests" },
  { id: "abilities", label: "Abilities" },
  { id: "settings", label: "Settings" },
];

export default function TopNav({ activeScreen, setActiveScreen }) {
  return (
    <nav className="top-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={activeScreen === tab.id ? "active" : ""}
          onClick={() => setActiveScreen(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
