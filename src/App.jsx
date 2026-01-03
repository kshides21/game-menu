import { useState, useRef, useEffect } from "react";
import PauseMenu from "./components/PauseMenu";
import "./styles/globals.css";
import music from "./music/Cyber_Streets.mp3";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("map");
  const [musicOn, setMusicOn] = useState(false);
  const [theme, setTheme] = useState("day");
  const [font, setFont] = useState("michroma");
  const [characterType, setcharacterType] = useState("soldier");
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    if (musicOn) {
      audioRef.current.loop = true;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <div className={`app-root ${theme} font-${font.toLowerCase()}`}>
      <PauseMenu
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
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
