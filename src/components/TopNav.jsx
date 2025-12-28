import "../styles/NavBar.css";
export default function TopNav({ activeScreen, setActiveScreen }) {

const tabs = [
  { id: "map", label: "Map" },
  { id: "character", label: "Character" },
  { id: "missions", label: "Missions" },
  { id: "abilities", label: "Abilities" },
  { id: "settings", label: "Settings" },
];

  return (
    <nav className="top-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveScreen(tab.id)}
          className={activeScreen === tab.id ? "nav-active" : ""}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
