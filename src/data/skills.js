export const SKILLS = {
  reflex_boost: {
    id: "reflex_boost",
    name: "Reflex Boost",
    tier: 1,
    category: "combat",
    cost: 20,
    description: "Increase reaction speed in combat.",
    requires: [],
  },

  weapon_calibration: {
    id: "weapon_calibration",
    name: "Weapon Calibration",
    tier: 2,
    category: "combat",
    cost: 40,
    description: "Improved weapon accuracy.",
    requires: ["reflex_boost"],
  },

  overclocked_fire: {
    id: "overclocked_fire",
    name: "Overclocked Fire",
    tier: 2,
    category: "combat",
    cost: 40,
    description: "Temporarily boost weapon damage.",
    requires: ["reflex_boost"],
  },

  multiple_targets: {
    id: "multiple_targets",
    name: "Multiple Targets",
    tier: 3,
    category: "combat",
    cost: 60,
    description: "Attack multiple enemies in one turn.",
    requires: ["weapon_calibration"],
  },

  devestating_strike: {
    id: "devestating_strike",
    name: "Devestating Strike",
    tier: 3,
    category: "combat",
    cost: 60,
    description: "High damage single attack.",
    requires: ["weapon_calibration"],
  },

  esteemed_tactician: {
    id: "esteemed_tactician",
    name: "Esteemed Tactician",
    tier: 3,
    category: "combat",
    cost: 60,
    description: "Boost team combat effectiveness.",
    requires: ["overclocked_fire"],
  },

  washed_out: {
    id: "washed_out",
    name: "Washed Out",
    tier: 3,
    category: "combat",
    cost: 60,
    description: "Reduce enemy accuracy.",
    requires: ["overclocked_fire"],
  },

  // ===== CYBER INFLUENCE =====
  neural_hack: {
    id: "neural_hack",
    name: "Neural Hack",
    tier: 1,
    category: "influence",
    cost: 20,
    description: "Basic hacking of enemy systems.",
    requires: [],
  },

  system_override: {
    id: "system_override",
    name: "System Override",
    tier: 2,
    category: "influence",
    cost: 40,
    description: "Control enemy drones or doors.",
    requires: ["neural_hack"],
  },

    data_leech: {
    id: "data_leech",
    name: "Data Leech",
    tier: 2,
    category: "influence",
    cost: 40,
    description: "Steal data from enemy systems.",
    requires: ["neural_hack"],
  },

    firewall_breach: {
    id: "firewall_breach",
    name: "Firewall Breach",
    tier: 3,
    category: "influence",
    cost: 60,
    description: "Bypass advanced security systems.",
    requires: ["system_override"],
  },
  
  ai_subversion: {
    id: "ai_subversion",
    name: "AI Subversion",
    tier: 3,
    category: "influence",
    cost: 60,
    description: "Take control of enemy AI units.",
    requires: ["system_override"],
  },

  encrypted_exfiltration: {
    id: "encrypted_exfiltration",
    name: "Encrypted Exfiltration",
    tier: 3,
    category: "influence",
    cost: 60,
    description: "Securely extract data without detection.",
    requires: ["data_leech"],
  },
  
  microbot_swarm: {
    id: "microbot_swarm",
    name: "Microbot Swarm",
    tier: 3,
    category: "influence",
    cost: 60,
    description: "Deploy microbots to disrupt enemy systems.",
    requires: ["data_leech"],
  },

  // ===== AUGMENTATION =====
  nano_regen: {
    id: "nano_regen",
    name: "Nano Regeneration",
    tier: 1,
    category: "augmentation",
    cost: 20,
    description: "Slow HP regeneration over time.",
    requires: [],
  },

  reinforced_frame: {
    id: "reinforced_frame",
    name: "Reinforced Frame",
    tier: 2,
    category: "augmentation",
    cost: 40,
    description: "Increased damage resistance.",
    requires: ["nano_regen"],
  },

    energy_shield: {
    id: "energy_shield",
    name: "Energy Shield",
    tier: 2,
    category: "augmentation",
    cost: 40,
    description: "Temporary shield to absorb damage.",
    requires: ["nano_regen"],
  },

    adaptive_plating: {
    id: "adaptive_plating",
    name: "Adaptive Plating",
    tier: 3,
    category: "augmentation",
    cost: 60,
    description: "Boost resistance against various damage types.",
    requires: ["reinforced_frame"],
  },

  kinetic_barrier: {
    id: "kinetic_barrier",
    name: "Kinetic Barrier",
    tier: 3,
    category: "augmentation",
    cost: 60,
    description: "Reflect a portion of incoming damage.",
    requires: ["reinforced_frame"],
  },

  overcharged_cells: {
    id: "overcharged_cells",
    name: "Overcharged Cells",
    tier: 3,
    category: "augmentation",
    cost: 60,
    description: "Increase energy capacity for abilities.",
    requires: ["energy_shield"],
  },

  rapid_recharge: {
    id: "rapid_recharge",
    name: "Rapid Recharge",
    tier: 3,
    category: "augmentation",
    cost: 60,
    description: "Faster energy regeneration.",
    requires: ["energy_shield"],
  },
};
