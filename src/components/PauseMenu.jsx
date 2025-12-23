import TopNav from "./TopNav";
import ScreenWrapper from "./ScreenWrapper";

export default function PauseMenu({ activeScreen, setActiveScreen, musicOn, setMusicOn, theme, setTheme, font, setFont, characterGender, setCharacterGender }) {
  return (
    <div className="pause-menu">
      <TopNav
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      <ScreenWrapper 
      activeScreen={activeScreen}
      musicOn={musicOn}
      setMusicOn={setMusicOn}
      theme={theme}
      setTheme={setTheme}
      font={font}
      setFont={setFont}
      characterGender={characterGender}
      setCharacterGender={setCharacterGender}
      />
    </div>
  );
}
