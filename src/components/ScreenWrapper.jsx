import MapScreen from "../screens/MapScreen";
import CharacterScreen from "../screens/CharacterScreen";
import MissionScreen from "../screens/MissionScreen";
import AbilitiesScreen from "../screens/AbilitiesScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default function ScreenWrapper({
  activeScreen,
  musicOn,
  setMusicOn,
  theme,
  setTheme,
  font,
  setFont,
  characterType,
  setcharacterType,
}) {
  switch (activeScreen) {
    case "map":
      return <MapScreen />;
    case "character":
      return <CharacterScreen characterType={characterType} />;
    case "missions":
      return <MissionScreen />;
    case "abilities":
      return <AbilitiesScreen />;
    case "settings":
      return (
        <SettingsScreen
          musicOn={musicOn}
          setMusicOn={setMusicOn}
          theme={theme}
          setTheme={setTheme}
          font={font}
          setFont={setFont}
          characterType={characterType}
          setcharacterType={setcharacterType}
        />
      );
    default:
      return null;
  }
}
