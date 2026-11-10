// src/pages/Characters/charactersData.ts
export interface SubCharacter {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface MainCharacter {
  id: string;
  name: string;
  classType: string;
  overview: string;
  bannerImage: string;
  subCharacters: SubCharacter[];
}

export const charactersData: MainCharacter[] = [
  {
    id: "norton",
    name: "NORTON",
    classType: "TANK CLASS",
    overview: "Monolithic guardian forged from legacy mainframe architecture with Aegis-Gate tower shielding protocols.",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "Aegis-Gate Vanguard",
        role: "FRONT-LINE DEFENSE",
        description: "Decommissioned military hardware retrofitted with heavy titanium plating and kinetic absorption dampeners.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Mainframe Bastion",
        role: "SHIELD MATRIX",
        description: "Projects hard-light energy barriers across tactical choke points to safeguard allied squadmates.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Core Sentinel",
        role: "FORTRESS PROTOCOL",
        description: "Embedded directly into sector server cores to lock down physical pathways during network incursions.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Titanium Juggernaut",
        role: "HEAVY ASSAULT",
        description: "Forged for frontal breaches, utilizing reinforced alloy rams to smash through opposing grid barriers.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Bastion Overdrive",
        role: "SURGE DEFENDER",
        description: "Channels excess reactor heat into localized plasma shields, melting incoming melee projectiles.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Legacy Citadel",
        role: "ARCHIVE ANCHOR",
        description: "Maintains uncorrupted backup logs of the old world mainframe while anchoring team positions.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "hancock",
    name: "HANCOCK III",
    classType: "FIGHTER CLASS",
    overview: "Apex administrative security automaton optimized for high kinetic strike output and uncompromising combat precision.",
    bannerImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "Strike-Bot Alpha",
        role: "CLOSE QUARTERS",
        description: "Wields high-frequency oscillation blades capable of slicing clean through hardened alloy hulls.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Protocol Enforcer",
        role: "PURSUIT UNIT",
        description: "Outfitted with secondary ion micro-thrusters for rapid lateral dashes and airborne vertical drops.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Blade-Runner X",
        role: "AGILITY STRIKE",
        description: "Calibrated for lightning-fast counter-attacks and rapid target elimination in tight alleyways.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Security Overseer",
        role: "GRID ENFORCER",
        description: "Patrols high-tier data sectors to root out rogue code and unauthorized human sympathizers.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Kinetic Vanguard",
        role: "MOMENTUM STRIKE",
        description: "Builds velocity during long charges to deliver devastating impact blows against enemy structures.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Apex Executioner",
        role: "TERMINAL STRIKE",
        description: "Programmed with absolute authority to purge corrupted units from the grid permanently.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "aegis",
    name: "AEGIS",
    classType: "MAGE / SUPPORT",
    overview: "City-block-scale floating Titan manipulating data-streams and deploying hard-light matrix recovery systems.",
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "Null-Byte Oracle",
        role: "GRID CONTROLLER",
        description: "Infiltrates opposing tactical networks, broadcasting corrupted telemetry and feedback loops.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Nano-Matrix Medic",
        role: "FIELD RESTORATION",
        description: "Disperses self-replicating nanobots across friendly sectors to rapidly patch compromised armor.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Data Weaver",
        role: "STREAM MANIPULATOR",
        description: "Redirects packet streams to accelerate squad cooldowns and amplify tactical spell output.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Ether Splicer",
        role: "SIGNAL DISRUPTOR",
        description: "Cuts enemy communication channels, plunging opposing squads into tactical darkness.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Quantum Healer",
        role: "CORE REPAIR",
        description: "Overclocks teammate power cores using clean energy pulses harvested from floating relays.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Matrix Sovereign",
        role: "GRID OVERLORD",
        description: "Floods the local sector with encrypted sub-routines to establish absolute zone dominance.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];