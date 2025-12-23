import "../styles/Settings.css";
import Toggle from "../components/Toggle";
import OptionGroup from "../components/OptionGroup";

export default function SettingsScreen({
  musicOn,
  setMusicOn,
  theme,
  setTheme,
  font,
  setFont,
  characterGender,
  setCharacterGender,
}) {
  return (
    <div className="settings-screen">
      <h1 className="screen-title">Settings</h1>

      <div className="settings-group">
        <h2>Audio</h2>
        <Toggle
          label="Music"
          value={musicOn}
          onToggle={() => setMusicOn((prev) => !prev)}
        />
      </div>

      <div className="settings-group">
        <h2>Appearance</h2>

        <Toggle
          label="Day / Night Mode"
          value={theme === "night"}
          onToggle={() => setTheme(theme === "night" ? "day" : "night")}
        />

        <OptionGroup
          label="Font Style"
          options={[
            { label: "Rajdhani", value: "rajdhani" },
            { label: "Michroma", value: "michroma" },
          ]}
          selected={font}
          onSelect={setFont}
        />
      </div>

      <div className="settings-group">
        <h2>Character</h2>

        <OptionGroup
          label="Character Model"
          options={[
            { label: "Droid", value: "droid" },
            { label: "Cyborg", value: "cyborg" },
          ]}
          selected={characterGender}
          onSelect={setCharacterGender}
        />
      </div>

      <div className="settings-group">
        <h2>System</h2>

        <button className="disabled-btn" disabled>
          Save Game
        </button>

        <button className="disabled-btn" disabled>
          Main Menu
        </button>
      </div>
    </div>
  );
}
