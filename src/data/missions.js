export const MISSIONS = [
  {
    id: "q001",
    title: "Signal in the Ruins",
    status: "active",
    locationId: "shadow_slums",
    description:
      "A faint distress signal is broadcasting from an abandoned sector. Investigate the source.",
    objectives: [
      "Reach Sector 7",
      "Locate the broadcast source",
      "Eliminate hostiles",
    ],
    rewards: {
      xp: 250,
      credits: 100,
      items: ["Energy Cell"],
    },
  },
  {
    id: "q002",
    title: "Prototype Retrieval",
    status: "completed",
    locationId: "neo_core",
    description:
      "Recover the stolen prototype from the rogue engineer.",
    objectives: ["Find the engineer", "Recover the prototype"],
    rewards: {
      xp: 300,
      credits: 250,
      items: ["Mercury Vest"],
    },
  },
  {
    id: "q003",
    title: "Space Pirates",
    status: "completed",
    locationId: "cyber_docks",
    description:
      "Space pirates have been attacking cargo ships in the outer rim. Put an end to their raids.",
    objectives: ["Locate the mother ship", "Defeat Captain Vex"],
    rewards: {
      xp: 400,
      credits: 300,
      items: ["Stardust Blade"],
    },
  },
  {
    id: "q005",
    title: "Galactic Trade Route",
    status: "completed",
    locationId: "market_alley",
    description:
      "Establish a new trade route between the outer colonies and the central hub.",
    objectives: [
      "Negotiate with colony leaders",
      "Secure trade agreements",
      "Set up supply lines",
    ],
    rewards: {
      xp: 600,
      credits: 500,
      items: ["Cloaking Chip"],
    },
  },
  {
    id: "q006",
    title: "Rescue Operation",
    status: "active",
    locationId: "shadow_slums",
    description:
      "A mining crew is trapped underground after a cave-in. Lead the rescue operation.",
    objectives: [
      "Locate the mining site",
        "Clear debris",
        "Evacuate the crew",
    ],
    rewards: {
      xp: 350,
      credits: 150,
      items: ["Medical Kit"],
    },
  },
  {
    id: "q004",
    title: "Unknown Coordinates",
    status: "locked",
    locationId: "quantum_heights",
    description:
      "Data is encrypted. Progress further to unlock this mission.",
    objectives: [],
    rewards: null,
  },
  {
    id: "q007",
    title: "Diplomatic Agreement",
    status: "locked",
    locationId: "sky_haven",
    description:
      "A diplomatic envoy awaits your presence. Progress further to unlock this mission.",
    objectives: [],
    rewards: null,
  },
  {
    id: "q008",
    title: "Ancient Artifact",
    status: "locked",
    locationId: "iron_wastes",
    description:
      "Legends speak of an ancient artifact hidden deep within the ruins. Progress further to unlock this mission.",
    objectives: [],
    rewards: null,
  },
  {
    id: "q009",
    title: "Secuirty Breach",
    status: "locked",
    locationId: "neo_core",
    description:
      "A security breach has been detected in the mainframe. Progress further to unlock this mission.",
    objectives: [],
    rewards: null,
  },
  {
    id: "q010",
    title: "Smuggler's Run",
    status: "locked",
    locationId: "the_underbelly",
    description:
      "A notorious smuggler is operating underground. Progress further to unlock this mission.",
    objectives: [],
    rewards: null,
  }
];
