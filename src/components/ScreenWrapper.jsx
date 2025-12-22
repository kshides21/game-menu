import MapScreen from "../screens/MapScreen";
import CharacterScreen from "../screens/CharacterScreen";
import MissionScreen from "../screens/MissionScreen";
import AbilitiesScreen from "../screens/AbilitiesScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default function ScreenWrapper({ activeScreen }) {
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
      return <SettingsScreen />;
    default:
      return null;
  }
}
