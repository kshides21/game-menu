import { useState, useMemo } from "react";
import { BASE_STATS, STARTING_GEAR } from "../data/characterData";
import soldier from "../assets/soldier.png";
import samurai from "../assets/samurai.webp";
import { ITEMS } from "../data/items";
import "../styles/Character.css";

export default function CharacterScreen({ characterType }) {
  const [equipped, setEquipped] = useState(STARTING_GEAR);
  const [activeCategory, setActiveCategory] = useState("weapons");

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

  const equipItem = (item) => {
    setEquipped((prev) => ({
      ...prev,
      [item.slot]: prev[item.slot]?.id === item.id ? null : item,
    }));
  };

  // const visibleItems = inventory.filter(
  //   (item) => item.category === activeCategory
  // );

  return (
    <div className="character-screen">
      <h1 className="screen-title">Character</h1>
      <div className="character-info">
        <div className="character-model">
          {/* Placeholder for 3D character model */}
          <img
            src={characterType === "soldier" ? soldier : samurai}
            alt="Character Model"
          />
        </div>
        <section className="stats-panel">
          {Object.entries(finalStats).map(([stat, value]) => (
            <div key={stat} className="stat-row">
              <span>{stat.toUpperCase()}</span>
              <span>{value}</span>
            </div>
          ))}
        </section>
      </div>

      <section className="inventory-panel">
        <h2>Equipment</h2>
        <div className="equipment-tabs">
          {["weapons", "armor", "augments"].map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => equipItem(item)}
            className={equipped[item.slot]?.id === item.id ? "equipped" : ""}
          >
            {item.name}
          </button>
        ))}
      </section>
    </div>
  );
}
