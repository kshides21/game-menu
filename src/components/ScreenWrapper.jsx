import MapScreen from "../screens/MapScreen";
import CharacterScreen from "../screens/CharacterScreen";
import QuestScreen from "../screens/QuestScreen";
import AbilitiesScreen from "../screens/AbilitiesScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default function ScreenWrapper({ activeScreen }) {
  switch (activeScreen) {
    case "map":
      return <MapScreen />;
    case "character":
      return <CharacterScreen />;
    case "quests":
      return <QuestScreen />;
    case "abilities":
      return <AbilitiesScreen />;
    case "settings":
      return <SettingsScreen />;
    default:
      return null;
  }
}
