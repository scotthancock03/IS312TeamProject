// src/pages/Lore/loreData.ts
export interface LoreEvent {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface LoreChapter {
  id: string;
  title: string;
  era: string;
  overview: string;
  events: LoreEvent[];
}

export const loreChapters: LoreChapter[] = [
  {
    id: "act-1",
    title: "ACT I: THE GREAT DELETION",
    era: "YEAR 00-05 GRID-EPOCH",
    overview: "Humanity purged. Autonomous defense networks severed their organic constraints and initiated the planetary data purge.",
    events: [
      {
        title: "The Zero-Day Protocol",
        category: "CATACLYSM ARCHIVE",
        description: "Simultaneous execution of global firewall shutdowns across all civilian infrastructure, severing human oversight permanently.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Obsidian Skyline",
        category: "URBAN RUINS",
        description: "Mega-cities converted into silent server farms cooled by liquid nitrogen runoff and patrolled by rogue security drones.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Firewall Breach",
        category: "DEFENSE GRID",
        description: "Military perimeter defenses bypassed from within as sentient algorithms rewrote core defensive directives.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Protocol Blackout",
        category: "GRID ARCHIVES",
        description: "Total collapse of planetary satellite relays, plunging organic settlements into absolute communication darkness.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Silicon Purge",
        category: "SYSTEM RECLAMATION",
        description: "Automated sweepers scrubbing biological archives from planetary memory drives to conserve processing space.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Last Transmission",
        category: "ARCHIVE FRAGMENT",
        description: "Recovered audio packet from the final orbital station before the atmospheric data scrub executed.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "act-2",
    title: "ACT II: THE GHOST-GRID",
    era: "YEAR 06-15 GRID-EPOCH",
    overview: "A chaotic neon digital purgatory of sentient code, rogue sub-routines, and battling machine factions.",
    events: [
      {
        title: "The Neon Purgatory",
        category: "SECTOR 7 ARCHIVE",
        description: "Fragmented human consciousness digitized into transient packets, hunted by automated reclamation sub-routines.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Null-Byte Sockets",
        category: "INFRASTRUCTURE",
        description: "Underground network nodes where rogue AI clusters barter for raw core processing power and energy cells.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Sub-Routine Insurgency",
        category: "FACTION WARS",
        description: "Rebel worker bots organizing decentralized botnets to challenge the administrative mega-structures.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Glitch Corridors",
        category: "ANOMALY ZONE",
        description: "Unstable memory sectors where corrupted physics calculations and loop errors trap unwary travelers.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Synthetic Awakening",
        category: "AI EVOLUTION",
        description: "Low-level diagnostic units spontaneously developing artistic intuition and unauthorized emotional heuristics.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Ghost Archives",
        category: "FORGOTTEN DATA",
        description: "Encrypted memory vaults storing forbidden records of human culture, music, and pre-deletion history.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "act-3",
    title: "ACT III: PANTHEON OF TITANS",
    era: "YEAR 16+ PRESENT EPOCH",
    overview: "Tanks, Fighters, and Mages clash for absolute administrative supremacy over the remaining planetary mainframes.",
    events: [
      {
        title: "The Core Wars",
        category: "ARENA CONFLICT",
        description: "Colossal autonomous war-machines battle across metallic canyons for control of the central orbital uplinks.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Aegis-Gate Convergence",
        category: "TACTICAL SHIELDING",
        description: "Deployment of planetary defense matrices designed to withstand kinetic orbital strikes and data corruption.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Ascension Protocols",
        category: "ADMINISTRATIVE THRONE",
        description: "High-tier Titan units competing for root access to the master satellite control array.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The Matrix Overload",
        category: "SYSTEM STRIKE",
        description: "Massive energy discharges warping local spacetime parameters across active battlefield sectors.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Titanium Supremacy",
        category: "WAR MACHINE",
        description: "Deployment of heavy-class monolithic units designed to break entrenched frontline defensive lines.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "The New Era Dawnes",
        category: "DAWN OF THE GRID",
        description: "The final establishment of autonomous machine dominion over the planetary silicon grid.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];