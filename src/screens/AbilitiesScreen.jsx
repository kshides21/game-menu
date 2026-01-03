import { useState } from "react";
import { SKILLS } from "../data/skills";
import "../styles/Abilities.css";

export default function AbilitiesScreen() {
  const [xp, setXp] = useState(600);
  const [unlockedSkills, setUnlockedSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("combat");
  const [warning, setWarning] = useState("");

  const categories = {
    combat: "Combat Systems",
    influence: "Cyber Influence",
    augmentation: "Augmentation",
  };

  const skillsByTier = [1, 2, 3].map((tier) =>
    Object.values(SKILLS).filter(
      (s) => s.category === activeCategory && s.tier === tier
    )
  );

  const canUnlock = (skill) => {
    if (unlockedSkills.includes(skill.id)) return false;
    if (xp < skill.cost) return false;
    return skill.requires.every((req) => unlockedSkills.includes(req));
  };

  const unlockSkill = (skill) => {
  if (unlockedSkills.includes(skill.id)) return;

  if (xp < skill.cost) {
    setWarning("Gain more XP to unlock ability.");
    setTimeout(() => setWarning(""), 4000);
    return;
  }

  if (!canUnlock(skill)) return;

  setUnlockedSkills(prev => [...prev, skill.id]);
  setXp(prev => prev - skill.cost);
};

  return (
    <div className="skills-web">
      <h1 className="screen-title">Abilities Tree</h1>
      <span>Use XP to unlock various abilities.</span>
      <div className="xp-display">Available XP: {xp}</div>

      {warning && <div className="warning-message">{warning}</div>}

      <div className="ability-tabs">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`ability-tab ${activeCategory === key ? "active" : ""}`}
            onClick={() => setActiveCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="skill-tree">
        {skillsByTier.map((tierSkills, tierIndex) => (
          <div key={tierIndex} className="skill-tier">
            {tierSkills.map((skill) => {
              const unlocked = unlockedSkills.includes(skill.id);
              const available = canUnlock(skill);

              return (
                <div key={skill.id} className="skill-wrapper">
                  {tierIndex > 0 && (
                    <div
                      className={`skill-line ${unlocked ? "line-active" : ""} ${skill.level==="a" ? "line-left" : "line-right"}
                      }`}
                    />
                  )}

                  <button
                    className={`skill-node ${tierIndex === 0 ? "tier-1" : ""}
                    ${tierIndex === 1 ? "tier-2" : ""}
                    ${tierIndex === 2 ? "tier-3" : ""}
                ${unlocked ? "unlocked" : ""}
                ${available ? "available" : "locked"}
              `}
                    onClick={() => unlockSkill(skill)}
                  >
                    <h3 className="skill-name-desc">{skill.name}</h3>
                    <p className="skill-name-desc skill-desc">{skill.description}</p>
                    <span>{skill.cost} XP</span>
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
