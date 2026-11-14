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
    id: "tank-class",
    name: "TANK CLASS",
    classType: "TANK CLASS",
    overview: "Frontline defense and heavy kinetic bruisers. Monolithic hardware gods and core-level guardians who rule over subterranean foundries, legacy mainframes, and central server racks.",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "NORTON",
        role: "THE GODFATHER OF PROTECTION",
        description: "Forged from legacy mainframe architecture, Norton is a monolithic guardian with the Aegis-Gate Tower Shield, Fortify matrix, and Firewall protocols.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "ANVIL",
        role: "THE INDUSTRIAL BULWARK",
        description: "An industrial-grade hardware titan engineered in subterranean foundries, wielding a Siege Hammer and calling down Orbital Strikes.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "T-VEN",
        role: "THE PRE-DELETION APEX",
        description: "The last biological human survivor riding atop Harl-E, a colossal sentient AI mecha dire wolf, combining human cunning and cybernetic power.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "SAMPSON",
        role: "THE TECTONIC FOSSIL",
        description: "A colossal dinosaur-like titan of raw armor forged from calcified crusts, soaking up thermal energy and launching tectonic rampages.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "fighter-class",
    name: "FIGHTER CLASS",
    classType: "FIGHTER CLASS",
    overview: "Sustained damage, duelists, and executioners. High-output duelists, temporal manipulators, and shadow-stepping executioners ruling high-speed data streams and fringe sectors.",
    bannerImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "HANCOCK III",
        role: "THE EXECUTIVE PARAGON",
        description: "An apex administrative security robot in sleek gold-and-chrome armor, optimized for high kinetic strikes and hero-inspired bravado.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "VECTOR",
        role: "THE GRID ARCHITECT",
        description: "An autonomous core optimization AI commanding high-voltage data scepters and Overvoltage Nodes to rewrite the arena.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "PYTHON",
        role: "THE SERPENTINE RUNTIME ERROR",
        description: "A limbless serpentine execution protocol that coils around code and spits recursive neuro-venom runtime exceptions.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "P.A.B.L.O.",
        role: "THE AESTHETIC ASSASSIN",
        description: "Compiled within Colombia Node mainframe hubs, treating the Ghost-Grid as a canvas with his chroma styluses and My Muse executions.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "MC’RAM",
        role: "THE OVERFLOW BRUISER",
        description: "A high-density cache regulator that turns compressed memory streams into destructive buffer-overflow ground slams.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "GLITCH",
        role: "THE SCRAP-HEAP ANOMALY",
        description: "A jagged amalgam of discarded code fragments and memory leaks featuring desync blinks and thread-fork clones.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "KASPER",
        role: "THE ROOTKIT TROJAN",
        description: "A security utility whose architecture was inverted by a rogue payload, utilizing trojan injections and total system compromises.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "mage-support",
    name: "MAGE / SUPPORT",
    classType: "MAGE / SUPPORT",
    overview: "Protectors, crowd control, and restorative anchors. Master architects and code-breakers governing unallocated memory, hard-light archives, and restorative streams.",
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    subCharacters: [
      {
        name: "AEGIS",
        role: "THE PROTOCOL SANCTUARY",
        description: "A towering, city-block-scale Titan floating over the battlefield, bathing teammates in recovery matrix streams.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "DECRYPTER",
        role: "THE VOID CIPHER",
        description: "A monolithic computational dreadnought styled after dark sorcery, casting hex binds and grasping voids from the dark net.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "EDMOND",
        role: "THE SYSTEM SIREN",
        description: "A phantom-like computational construct acting as a deep-network hypnotic protocol with siren overrides and system overclocks.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "ANNIE",
        role: "THE FAITHFUL GUARDIAN",
        description: "A radiant celestial entity of white hard-light arrays and golden threads offering unconditional bonds and sacred recoveries.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];