import TopNav from "./TopNav";
import ScreenWrapper from "./ScreenWrapper";

export default function PauseMenu({ activeScreen, setActiveScreen }) {
  return (
    <div className="pause-menu">
      <TopNav
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      <ScreenWrapper activeScreen={activeScreen} />
    </div>
  );
}
