import { useState } from "react";
import { SKILLS } from "../data/skills";
import "../styles/Abilities.css";

export default function AbilitiesScreen() {
  const [xp, setXp] = useState(600);
  const [unlockedSkills, setUnlockedSkills] = useState([]);

  const categories = {
    combat: "Combat Systems",
    influence: "Cyber Influence",
    augmentation: "Augmentation",
  };

  const canUnlock = (skill) => {
    if (unlockedSkills.includes(skill.id)) return false;
    if (xp < skill.cost) return false;
    return skill.requires.every(req =>
      unlockedSkills.includes(req)
    );
  };

  const unlockSkill = (skill) => {
    if (!canUnlock(skill)) return;
    setUnlockedSkills(prev => [...prev, skill.id]);
    setXp(prev => prev - skill.cost);
  };

  return (
    <div className="skills-web">
      <h1 className="screen-title">Abilities</h1>
      <div className="xp-display">XP: {xp}</div>

      <div className="skills-grid">
        {Object.entries(categories).map(([key, label]) => (
          <div key={key} className="skill-column">
            <h2>{label}</h2>

            {Object.values(SKILLS)
              .filter(skill => skill.category === key)
              .map(skill => {
                const unlocked = unlockedSkills.includes(skill.id);
                const available = canUnlock(skill);

                return (
                  <button
                    key={skill.id}
                    className={`skill-node 
                      ${unlocked ? "unlocked" : ""} 
                      ${available ? "available" : "locked"}
                    `}
                    onClick={() => unlockSkill(skill)}
                  >
                    <strong>{skill.name}</strong>
                    <span>{skill.cost} XP</span>
                  </button>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
