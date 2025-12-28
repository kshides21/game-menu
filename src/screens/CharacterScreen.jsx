import { useState, useMemo, useRef, useEffect } from "react";
import { BASE_STATS, STARTING_GEAR } from "../data/characterData";
import soldier from "../assets/soldier.png";
import samurai from "../assets/samurai.webp";
import { ITEMS } from "../data/items";
import "../styles/Character.css";

export default function CharacterScreen({ characterType }) {
  const [equipped, setEquipped] = useState(STARTING_GEAR);
  const [activeCategory, setActiveCategory] = useState("weapon");
  const [statChanges, setStatChanges] = useState({});
  const CATEGORIES = [
    { key: "weapon", label: "Weapons" },
    { key: "armor", label: "Armor" },
    { key: "augment", label: "Augments" },
  ];

  const finalStats = useMemo(() => {
    const stats = { ...BASE_STATS };

    Object.values(equipped).forEach((item) => {
      if (!item) return;
      Object.entries(item.stats).forEach(([stat, value]) => {
        stats[stat] += value;
      });
    });

    return stats;
  }, [equipped]);

  const prevStatsRef = useRef(finalStats);

  const visibleItems = useMemo(() => {
    return ITEMS.filter((item) => item.slot === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const changes = {};

    Object.entries(finalStats).forEach(([stat, value]) => {
      const prev = prevStatsRef.current[stat];
      if (prev !== value) {
        changes[stat] = value > prev ? "up" : "down";
      }
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatChanges(changes);
    prevStatsRef.current = finalStats;
  }, [finalStats]);

  const equipItem = (item) => {
    setEquipped((prev) => ({
      ...prev,
      [item.slot]: prev[item.slot]?.id === item.id ? null : item,
    }));
  };

  return (
    <div className="character-screen">
      <h1 className="screen-title">Character</h1>
      <div className="character-info">
        <div className="character-model">
          <img
            src={characterType === "soldier" ? soldier : samurai}
            alt="Character Model"
          />
        </div>
        <section className="stats-panel">
          {Object.entries(finalStats).map(([stat, value]) => (
            <div key={stat} className="stat-row">
              <span>{stat.toUpperCase()}</span>
              <span
                className={`stat-value ${
                  statChanges[stat] ? `stat-${statChanges[stat]}` : ""
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </section>
      </div>

      <section className="inventory-panel">
        <h2 className="equipment-title">Equipment</h2>
        <div className="equipment-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`tab-btn ${
                activeCategory === cat.key ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="equipment-grid">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              onClick={() => equipItem(item)}
              className={`equipment-card ${
                equipped[item.slot]?.id === item.id ? "equipped" : ""
              }`}
            >
              <h4 className="item-title">{item.name}</h4>
              <div className="item-stats">
                {Object.entries(item.stats).map(([stat, value]) => (
                  <span key={stat}>
                    {stat.toUpperCase()} {value > 0 ? `+${value}` : value}
                    <br />
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
