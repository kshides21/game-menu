import { useState, useMemo } from "react";
import { BASE_STATS, STARTING_GEAR } from "../data/characterData";
import { ITEMS } from "../data/items";
import "../styles/Character.css";

export default function CharacterScreen() {
  const [equipped, setEquipped] = useState(STARTING_GEAR);

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

  return (
    <div className="character-screen">
      <h1 className="screen-title">Character</h1>

      <section className="stats-panel">
        {Object.entries(finalStats).map(([stat, value]) => (
          <div key={stat} className="stat-row">
            <span>{stat.toUpperCase()}</span>
            <span>{value}</span>
          </div>
        ))}
      </section>

      <section className="inventory-panel">
        <h2>Equipment</h2>
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => equipItem(item)}
            className={
              equipped[item.slot]?.id === item.id ? "equipped" : ""
            }
          >
            {item.name}
          </button>
        ))}
      </section>
    </div>
  );
}

