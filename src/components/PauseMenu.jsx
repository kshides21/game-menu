import TopNav from "./TopNav";
import MobileMenu from "./MobileMenu";
import ScreenWrapper from "./ScreenWrapper";

export default function PauseMenu({
  activeScreen,
  setActiveScreen,
  musicOn,
  setMusicOn,
  theme,
  setTheme,
  font,
  setFont,
  characterType,
  setcharacterType,
}) {
  return (
    <div className="pause-menu">
      <TopNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <MobileMenu activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      <ScreenWrapper
        activeScreen={activeScreen}
        musicOn={musicOn}
        setMusicOn={setMusicOn}
        theme={theme}
        setTheme={setTheme}
        font={font}
        setFont={setFont}
        characterType={characterType}
        setcharacterType={setcharacterType}
      />
    </div>
  );
}
