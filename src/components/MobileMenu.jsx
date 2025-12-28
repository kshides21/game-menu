import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";

export default function MobileMenu({ activeScreen, setActiveScreen }) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "map", label: "Map" },
    { id: "character", label: "Character" },
    { id: "missions", label: "Missions" },
    { id: "abilities", label: "Abilities" },
    { id: "settings", label: "Settings" },
  ];

  const handleSelect = (id) => {
    setActiveScreen(id);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <nav className="top-nav-mobile">
      <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
        <FaBars />
      </button>
      {isOpen && (
        <div className="mobile-menu-overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>

          <div className="mobile-menu-links">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`menu-link ${
                  activeScreen === tab.id ? "active" : ""
                }`}
                onClick={() => handleSelect(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
