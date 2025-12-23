import MapScreen from "../screens/MapScreen";
import CharacterScreen from "../screens/CharacterScreen";
import MissionScreen from "../screens/MissionScreen";
import AbilitiesScreen from "../screens/AbilitiesScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default function ScreenWrapper({ activeScreen, musicOn, setMusicOn, theme, setTheme, font, setFont, characterGender, setCharacterGender }) {

  switch (activeScreen) {
    case "map":
      return <MapScreen />;
    case "character":
      return <CharacterScreen />;
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
          characterGender={characterGender}
          setCharacterGender={setCharacterGender}
        />
      );
    default:
      return null;
  }
}
