import { useState } from "react";
import PauseMenu from "./components/PauseMenu";
import "./styles/globals.css";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("map");

  return (
    <div className="app-root">
      <PauseMenu
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
    </div>
  );
}
